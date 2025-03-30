import { skills } from "@/data/skills";
import { techSkills } from "@/data/techSkills";
import { SkillProgress } from "./SkillProgress";
import { MapPin, Mail, Phone, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Image */}
          <div className="lg:col-span-1">
            <div className="rounded-xl overflow-hidden shadow-lg h-full">
              <img 
                src="https://images.unsplash.com/photo-1580795479225-c50ab8c3348d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80" 
                alt="Jay Khandwaye" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Bio Information */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold font-montserrat mb-4">Professional Background</h3>
            <p className="text-neutral-700 mb-6">
              With over 5 years of experience in video editing, I've honed my skills creating promotional videos, 
              social media content, eCommerce videos, and more. My journey in visual storytelling has equipped me 
              with the expertise to transform concepts into compelling visual narratives that captivate audiences.
            </p>
            <p className="text-neutral-700 mb-6">
              Currently, I serve as a Senior Video Editor at Anjney Panchgavyam India & Anjney Tubes India, 
              where I lead video production initiatives. Previously, I contributed my skills at k-11 Production & Events 
              and Anaxee Digital Runner's Pvt. Ltd., where I developed a versatile approach to video content creation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-xl font-medium font-montserrat mb-3 flex items-center">
                  <MapPin className="text-accent mr-2" /> Location
                </h4>
                <p className="text-neutral-700">Ahmedabad, India</p>
              </div>
              <div>
                <h4 className="text-xl font-medium font-montserrat mb-3 flex items-center">
                  <Mail className="text-accent mr-2" /> Email
                </h4>
                <p className="text-neutral-700">khandwayejay1220@gmail.com</p>
              </div>
              <div>
                <h4 className="text-xl font-medium font-montserrat mb-3 flex items-center">
                  <Phone className="text-accent mr-2" /> Phone
                </h4>
                <p className="text-neutral-700">+91 9340255075</p>
              </div>
              <div>
                <h4 className="text-xl font-medium font-montserrat mb-3 flex items-center">
                  <Briefcase className="text-accent mr-2" /> Experience
                </h4>
                <p className="text-neutral-700">5+ Years</p>
              </div>
            </div>
            
            {/* Personal Attributes */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold font-montserrat mb-4">Personal Attributes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-neutral-100 p-4 rounded-lg">
                  <div className="font-medium mb-2">Strong Communication</div>
                  <p className="text-sm text-neutral-600">Articulate client needs effectively</p>
                </div>
                <div className="bg-neutral-100 p-4 rounded-lg">
                  <div className="font-medium mb-2">Project Management</div>
                  <p className="text-sm text-neutral-600">Juggle multiple projects efficiently</p>
                </div>
                <div className="bg-neutral-100 p-4 rounded-lg">
                  <div className="font-medium mb-2">Technical Adaptability</div>
                  <p className="text-sm text-neutral-600">Quick to master new tools</p>
                </div>
                <div className="bg-neutral-100 p-4 rounded-lg">
                  <div className="font-medium mb-2">Creative Vision</div>
                  <p className="text-sm text-neutral-600">Passionate storyteller with keen eye</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold font-montserrat text-center mb-10">Core Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillProgress key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
        </div>
        
        {/* Technical Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold font-montserrat text-center mb-10">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techSkills.map((skill, index) => (
              <div key={index} className="bg-neutral-100 p-4 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl text-accent mb-3">{skill.icon}</div>
                <div className="font-medium">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
