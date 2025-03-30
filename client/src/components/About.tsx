import { skills } from "@/data/skills";
import { techSkills } from "@/data/techSkills";
import { SkillProgress } from "./SkillProgress";
import { MapPin, Mail, Phone, Briefcase, Film, Award, Calendar } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-primary uppercase tracking-wider text-sm font-medium">Who I Am</span>
            <div className="h-[1px] w-8 bg-primary"></div>
          </div>
          <h2 className="section-title text-center mx-auto mb-4">About Me</h2>
          <p className="section-subtitle text-center mx-auto mt-4">Transforming concepts into compelling visual narratives</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Image */}
          <div className="lg:col-span-1">
            <div className="rounded-xl overflow-hidden shadow-xl h-full card-hover border-2 border-white relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/30 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1580795479225-c50ab8c3348d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80" 
                alt="Jay Khandwaye" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <div className="inline-flex items-center gap-1 bg-primary px-3 py-1 rounded-full text-xs mb-2">
                  <Film className="w-3 h-3" />
                  <span>Videographer</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bio Information */}
          <div className="lg:col-span-2">
            <div className="rounded-xl p-6 bg-white shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="bg-primary h-5 w-1 inline-block rounded-full"></span>
                Professional Background
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                With over 5 years of experience in video editing, I've honed my skills creating promotional videos, 
                social media content, eCommerce videos, and more. My journey in visual storytelling has equipped me 
                with the expertise to transform concepts into compelling visual narratives that captivate audiences.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Currently, I serve as a Senior Video Editor at Anjney Panchgavyam India & Anjney Tubes India, 
                where I lead video production initiatives. Previously, I contributed my skills at k-11 Production & Events 
                and Anaxee Digital Runner's Pvt. Ltd., where I developed a versatile approach to video content creation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md mr-4">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Location</h4>
                    <p className="text-gray-600">Ahmedabad, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md mr-4">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">khandwayejay1220@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md mr-4">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 9340255075</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md mr-4">
                    <Briefcase className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Experience</h4>
                    <p className="text-gray-600">5+ Years</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Personal Attributes */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Award className="text-primary w-5 h-5" />
                <span>Personal Attributes</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow card-hover">
                  <div className="font-medium text-gray-800 mb-2">Strong Communication</div>
                  <p className="text-gray-600 text-sm">Articulate client needs effectively</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow card-hover">
                  <div className="font-medium text-gray-800 mb-2">Project Management</div>
                  <p className="text-gray-600 text-sm">Juggle multiple projects efficiently</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow card-hover">
                  <div className="font-medium text-gray-800 mb-2">Technical Adaptability</div>
                  <p className="text-gray-600 text-sm">Quick to master new tools</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow card-hover">
                  <div className="font-medium text-gray-800 mb-2">Creative Vision</div>
                  <p className="text-gray-600 text-sm">Passionate storyteller with keen eye</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">
              <span className="bg-primary/10 text-primary px-4 py-1 rounded-full">Core Skills</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillProgress key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
        </div>
        
        {/* Technical Skills */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
              <Calendar className="text-primary w-5 h-5" />
              <span>Technical Skills</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techSkills.map((skill, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center card-hover">
                <div className="text-3xl text-primary mb-3">{skill.icon}</div>
                <div className="font-medium">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
