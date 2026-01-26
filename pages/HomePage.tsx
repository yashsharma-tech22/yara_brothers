
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
    <div className="relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 -left-1/4 w-1/2 h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-[500px] bg-purple-600/10 blur-[120px] rounded-full -z-10" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-6">
              Next-Gen Software Agency
            </span>
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              We Build Digital Solutions That <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Grow Your Business</span>
            </motion.h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Transforming complex ideas into seamless digital experiences. From high-end websites to complex mobile applications, we handle it all.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/about" className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-indigo-500/30 flex items-center gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-bold transition-all backdrop-blur-sm">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-950/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-xl mx-auto">
              We specialize in creating robust digital products that stand out in today's competitive landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Why Modern Brands <br /><span className="text-indigo-500">Choose YARA Brothers</span></h2>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">
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
                      <p className="text-gray-400 text-sm">{feature.text}</p>
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
      <section className="py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-500/20"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to start your next project?</h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
              Join 100+ ambitious companies that use YARA Brothers to build their digital future. Contact us for a free consultation.
            </p>
            <Link to="/about" className="bg-white text-indigo-700 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg inline-block">
              Explore Our Plans
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
