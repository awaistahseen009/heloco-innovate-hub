
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: "Artificial Intelligence", path: "/services/ai" },
    { name: "Machine Learning", path: "/services/ml" },
    { name: "Low-Code/No-Code", path: "/services/lowcode" },
    { name: "Web Design", path: "/services/web-design" },
    { name: "Web Development", path: "/services/web-development" },
    { name: "Mobile Apps", path: "/services/mobile-apps" }
  ];
  
  const company = [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "News", path: "/news" },
    { name: "Blog", path: "/blog" },
    { name: "Partners", path: "/partners" }
  ];
  
  const legal = [
    { name: "Terms of Service", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "FAQ", path: "/faq" },
    { name: "Support", path: "/support" }
  ];
  
  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com/HelocoOfficial", name: "Facebook" },
    { icon: Twitter, url: "https://twitter.com/HelocoTech", name: "Twitter" },
    { icon: Linkedin, url: "https://linkedin.com/company/heloco-solutions", name: "LinkedIn" },
    { icon: Instagram, url: "https://instagram.com/Heloco_Innovate", name: "Instagram" },
    { icon: Youtube, url: "https://youtube.com/HelocoTechChannel", name: "YouTube" },
    { icon: Github, url: "https://github.com/HelocoOpenSource", name: "GitHub" }
  ];

  return (
    <footer className="bg-heloco-darkblue text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold mb-4">Heloco</h3>
            </Link>
            <p className="text-gray-300 mb-6">
              Empowering Businesses with Cutting-Edge Solutions since 2013.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-heloco-lightblue" />
                <a href="mailto:info@heloco.com" className="text-gray-300 hover:text-white transition-colors">
                  info@heloco.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-heloco-lightblue" />
                <a href="tel:+18005551234" className="text-gray-300 hover:text-white transition-colors">
                  +1-800-555-1234
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-heloco-lightblue flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Tech Lane, Silicon Valley, CA 94043, USA
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-white transition-colors hover:pl-1 duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-white transition-colors hover:pl-1 duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-white transition-colors hover:pl-1 duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Heloco. All rights reserved.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-heloco-blue transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
