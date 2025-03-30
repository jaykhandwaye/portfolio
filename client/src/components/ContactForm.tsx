import React from "react";

export default function ContactForm() {
  return (
    <div className="bg-neutral-100 rounded-xl p-8 shadow-lg border border-neutral-200">
      <h3 className="text-2xl font-semibold font-montserrat mb-2">Send a Message</h3>
      <p className="text-neutral-600 mb-6">Fill out the form below to discuss your project requirements</p>
      
      <div className="w-full">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSf9_bZH10OYRJknR1QV2wCuNtCnQy_p4x0XNRZvjF1cB9iZeQ/viewform?embedded=true" 
          width="100%" 
          height="800px" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0}
          title="Contact Form"
          className="mx-auto"
        >
          Loading Google Form...
        </iframe>
      </div>
    </div>
  );
}
