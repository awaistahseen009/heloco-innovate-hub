
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, SendIcon } from "lucide-react";

const ContactItem = ({ icon: Icon, title, details, link, isLink = false }: { 
  icon: React.ElementType; 
  title: string; 
  details: string; 
  link?: string;
  isLink?: boolean;
}) => (
  <div className="flex mb-6">
    <div className="bg-heloco-blue/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4">
      <Icon className="w-5 h-5 text-heloco-blue" />
    </div>
    <div>
      <h4 className="font-semibold text-heloco-darkblue mb-1">{title}</h4>
      {isLink ? (
        <a href={link} className="text-gray-600 hover:text-heloco-blue transition-colors">{details}</a>
      ) : (
        <p className="text-gray-600">{details}</p>
      )}
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heloco-darkblue mb-4 font-poppins">
            Get In Touch
          </h2>
          <p className="text-gray-600 font-inter">
            Have a project in mind? We'd love to hear from you. Reach out to us and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-heloco-darkblue mb-6">Contact Information</h3>
              <ContactItem 
                icon={Phone} 
                title="Phone" 
                details="+1-800-555-1234" 
                link="tel:+18005551234" 
                isLink={true} 
              />
              <ContactItem 
                icon={Mail} 
                title="Email" 
                details="info@heloco.com" 
                link="mailto:info@heloco.com" 
                isLink={true} 
              />
              <ContactItem 
                icon={MapPin} 
                title="Headquarters" 
                details="123 Tech Lane, Silicon Valley, CA 94043, USA" 
              />
              <ContactItem 
                icon={Clock} 
                title="Working Hours" 
                details="Monday-Friday, 9 AM - 6 PM PST" 
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-heloco-darkblue mb-4">Global Offices</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">London, UK</h4>
                  <p className="text-gray-600 text-sm">45 Innovation Street, London, EC1A 1BB</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Sydney, Australia</h4>
                  <p className="text-gray-600 text-sm">78 Tech Road, Sydney, NSW 2000</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Tokyo, Japan</h4>
                  <p className="text-gray-600 text-sm">22 Tech Tower, Tokyo, 100-0001</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Mumbai, India</h4>
                  <p className="text-gray-600 text-sm">101 Digital Hub, Mumbai, MH 400001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold text-heloco-darkblue mb-6">Send us a message</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input id="email" placeholder="your.email@example.com" type="email" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input id="subject" placeholder="Subject" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea id="message" placeholder="Your message here..." rows={6} />
              </div>
              <Button className="w-full bg-heloco-blue hover:bg-heloco-lightblue text-white font-medium transition-colors">
                Send Message <SendIcon className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
