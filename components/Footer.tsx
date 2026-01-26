
import React from 'react';
import { Github, Linkedin, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-950 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tighter text-white">YARA BROTHERS<span className="text-indigo-500">.</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We are a team of passionate developers and designers crafting high-performance digital solutions that help brands scale and thrive in the modern era.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Instagram className="w-5 h-5" />, href: "#" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                { icon: <Github className="w-5 h-5" />, href: "#" },
                { icon: <Twitter className="w-5 h-5" />, href: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-indigo-600 transition-all text-gray-300 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Mobile Applications</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">UI/UX Strategy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-indigo-500" />
                <span>San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-indigo-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-indigo-500" />
                <span>hello@yarabrothers.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} YARA Brothers Digital Agency. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
