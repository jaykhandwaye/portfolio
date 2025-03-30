import React from "react";
import { Film, Mail, Play } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="card p-0 overflow-hidden rounded-xl">
      <div className="bg-primary text-white p-8">
        <div className="flex items-center space-x-2 mb-4">
          <Film className="w-6 h-6" />
          <h3 className="text-2xl font-bold">Get in Touch</h3>
        </div>
        <p className="text-white/80 mb-6 max-w-md">Ready to bring your vision to life? Fill out this form and I'll get back to you quickly to discuss your project.</p>
        
        <div className="flex items-center space-x-3 text-white/90">
          <Mail className="w-5 h-5" />
          <span>khandwayejay1220@gmail.com</span>
        </div>
      </div>
      
      <div className="p-2 bg-white">
        <iframe 
          src="https://forms.gle/YsxmDFsJLYwBZCR79"
          width="100%" 
          height="740px" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0}
          title="Contact Form"
          className="mx-auto"
        >
          Loading Google Form...
        </iframe>
      </div>
      
      <div className="bg-gray-50 p-6 border-t border-gray-200 text-center text-gray-600 text-sm">
        <p className="flex items-center justify-center">
          <Play className="w-4 h-4 mr-2 text-primary" />
          All information is kept confidential and will only be used to discuss your project
        </p>
      </div>
    </div>
  );
}
