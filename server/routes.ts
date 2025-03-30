import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  deadline: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate form data
      const validatedData = contactSchema.parse(req.body);
      
      // Create transporter (using environment variables in production)
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.example.com",
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER || "user@example.com",
          pass: process.env.SMTP_PASSWORD || "password",
        },
      });
      
      // Format optional fields for email
      const phone = validatedData.phone ? `Phone: ${validatedData.phone}` : null;
      const projectType = validatedData.projectType ? `Project Type: ${validatedData.projectType}` : null;
      const budget = validatedData.budget ? `Budget Range: ${validatedData.budget}` : null;
      const deadline = validatedData.deadline ? `Project Timeline: ${validatedData.deadline}` : null;
      
      // Email content
      const mailOptions = {
        from: process.env.SMTP_FROM || "no-reply@example.com",
        to: process.env.CONTACT_EMAIL || "khandwayejay1220@gmail.com",
        subject: `Portfolio Contact: ${validatedData.name}`,
        text: `
          Name: ${validatedData.name}
          Email: ${validatedData.email}
          ${phone ? phone + '\n' : ''}
          ${projectType ? projectType + '\n' : ''}
          ${budget ? budget + '\n' : ''}
          ${deadline ? deadline + '\n' : ''}
          
          Message:
          ${validatedData.message}
        `,
        html: `
          <h2>New contact form submission</h2>
          <div style="border-left: 4px solid #0070f3; padding-left: 15px; margin-bottom: 20px;">
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
            ${projectType ? `<p><strong>Project Type:</strong> ${validatedData.projectType}</p>` : ''}
            ${budget ? `<p><strong>Budget Range:</strong> ${validatedData.budget}</p>` : ''}
            ${deadline ? `<p><strong>Project Timeline:</strong> ${validatedData.deadline}</p>` : ''}
          </div>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 4px;">${validatedData.message.replace(/\n/g, '<br>')}</p>
        `,
      };
      
      // In development, log the email instead of sending
      if (process.env.NODE_ENV === "development") {
        console.log("Email would be sent:", mailOptions);
        return res.status(200).json({ success: true, message: "Message received (development mode)" });
      }
      
      // Send email
      await transporter.sendMail(mailOptions);
      
      return res.status(200).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ success: false, message: validationError.message });
      }
      
      console.error("Contact form error:", error);
      return res.status(500).json({ success: false, message: "Failed to send message. Please try again later." });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
