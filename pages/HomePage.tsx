
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Users,
  ArrowRight
} from 'lucide-react';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: <Code2 className="w-10 h-10 text-indigo-500" />,
      title: "Web Development",
      desc: "Custom, scalable web solutions built with the latest technologies for maximum performance."
    },
    {
      icon: <Smartphone className="w-10 h-10 text-indigo-500" />,
      title: "App Development",
      desc: "High-performance iOS and Android applications designed for seamless user experiences."
    },
    {
      icon: <Palette className="w-10 h-10 text-indigo-500" />,
      title: "UI/UX Design",
      desc: "Intuitive designs that engage users and improve conversions through human-centered approach."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-indigo-500" />,
      title: "Digital Growth",
      desc: "Strategic marketing and SEO services to help your brand reach its full digital potential."
    }
  ];

  const features = [
    { icon: <Clock className="w-6 h-6" />, title: "Fast Delivery", text: "We respect your time. High-quality code delivered on schedule." },
    { icon: <Zap className="w-6 h-6" />, title: "Modern Tech", text: "We use the latest frameworks like React, Next.js, and Node." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Secure & Stable", text: "Enterprise-grade security and stability for your products." },
    { icon: <Users className="w-6 h-6" />, title: "Expert Support", text: "24/7 dedicated support team to assist you anytime." }
  ];

  return (
    <div className="relative min-h-screen bg-[#030014]">
      {/* Background Glows */}
      <div className="absolute top-0 -left-1/4 w-1/2 h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-[500px] bg-purple-600/10 blur-[120px] rounded-full -z-10" />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-10 text-[10px] font-black tracking-[0.3em] text-white uppercase bg-white/5 rounded-full border border-white/10 backdrop-blur-md shadow-2xl">
              Next-Gen Software Agency
            </span>
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-10 leading-[0.9] tracking-tighter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              We Build Digital Solutions That <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Grow Your Business</span>
            </motion.h1>
            <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
              Transforming complex ideas into seamless digital experiences. From high-end websites to complex mobile applications, we handle it all.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link to="/about-plans" className="group relative px-10 py-6 bg-white text-indigo-950 rounded-[2rem] font-black uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)] overflow-hidden flex items-center justify-center gap-2">
                <span className="relative z-10 flex items-center gap-2">Get Started Today <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-slate-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link to="/about-plans" className="group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs hover:text-indigo-400 transition-colors">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-40 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">Our Expertise</h2>
            <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400 max-w-xl mx-auto">
              We specialize in creating robust digital products that stand out in today's competitive landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative backdrop-blur-lg bg-white/5 p-10 rounded-[3rem] border-white/5 hover:border-white/20 transition-all duration-500"
              >
                <div className="mb-10 inline-flex p-5 rounded-[2rem] bg-white/5 border border-white/5 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-40 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6">Why Modern Brands <br /><span className="text-indigo-500">Choose YARA Brothers</span></h2>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                We don't just write code; we solve problems. Our holistic approach combines technical excellence with deep business insights to deliver measurable impact.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-600/20 text-indigo-500 rounded-xl flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                      <p className="text-slate-400 text-sm">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-30"></div>
              <img 
                src="https://picsum.photos/seed/agency-team/800/600" 
                alt="YARA Brothers team collaborating" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-video lg:aspect-square"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 rounded-[5rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
          <div className="relative backdrop-blur-lg bg-white/5 p-20 md:p-32 rounded-[5rem] text-center border-white/10 overflow-hidden group">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full" />
            
            <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter">Let's craft <br /> the future.</h2>
            <p className="text-slate-400 mb-16 max-w-2xl mx-auto text-xl font-medium">
              Nexus is the strategic partner for those who demand excellence in every pixel and every line of code.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
               <Link 
                 to="/about-plans" 
                 className="w-full sm:w-auto px-16 py-7 bg-white text-indigo-950 rounded-[2.5rem] font-black uppercase tracking-[0.2em] text-xs transition-all hover:scale-105 active:scale-95 shadow-2xl"
               >
                 Inquire Now
               </Link>
               <button className="flex items-center gap-4 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:text-indigo-400 transition-colors">
                  <svg className="w-5 h-5 text-indigo-500" /> Speak with Lead Engineer
               </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
