
import React from 'react';
import { Github, Linkedin, Instagram, Twitter, Mail, MapPin, Phone, ArrowUpRight, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#030014] border-t border-white/5 pt-32 pb-16 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
          <div className="md:col-span-6">
            <div className="flex items-center space-x-4 mb-10">
              <div className="bg-indigo-600 p-2 rounded-xl">
                <Zap className="text-white w-6 h-6 fill-white" />
              </div>
              <span className="text-2xl font-black text-white uppercase tracking-tighter">YARA Brothers<span className="text-indigo-400">LABS</span></span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tighter leading-tight">
               Building the next <br /> <span className="text-slate-600">epoch of digital experience.</span>
            </h3>
            <div className="flex space-x-8">
              {[
                { icon: <Instagram className="w-5 h-5" />, href: "#" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                { icon: <Github className="w-5 h-5" />, href: "#" },
                { icon: <Twitter className="w-5 h-5" />, href: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className="p-4 glass border-white/5 hover:border-indigo-500/30 hover:bg-white/5 text-slate-400 hover:text-white rounded-[1.5rem] transition-all duration-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-10">Studio</h4>
            <ul className="space-y-6 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Lab Portfolio</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Our Ethos</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Manifesto</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-10">Protocols</h4>
            <ul className="space-y-6 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Security Audit</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Architecture</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Compliance</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">API Portal</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
             <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-10">Collaborate</h4>
             <a href="mailto:hello@nexus.labs" className="group flex items-center gap-2 text-white font-black uppercase text-[10px] tracking-widest">
               Connect <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </a>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-10 text-slate-500 text-[10px] font-black tracking-[0.3em] uppercase">
            <span>&copy; {new Date().getFullYear()} YARA Brothers</span>
            <span className="hidden md:inline text-slate-800">|</span>
            <span className="hidden md:inline">SYSTEM STATUS: OPTIMAL</span>
          </div>
          <div className="flex gap-12 text-slate-500 text-[10px] font-black tracking-[0.2em] uppercase">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
