
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Users, Target, Rocket, Award, Info } from 'lucide-react';

const AboutPlansPage: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "$2,499",
      description: "Perfect for startups and small businesses looking to establish a presence.",
      features: [
        "Single-page high-performance web app",
        "Mobile responsive design",
        "Basic SEO optimization",
        "Custom domain integration",
        "Email support (24h response time)"
      ],
      isPopular: false
    },
    {
      name: "Professional",
      price: "$5,999",
      description: "Best for growing companies that need a custom-tailored digital solution.",
      features: [
        "Multi-page custom React application",
        "Dedicated UI/UX design process",
        "Advanced SEO & Analytics",
        "API Integration & CMS",
        "Priority Support (8h response time)",
        "Social media integration"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Complete end-to-end digital transformation for established organizations.",
      features: [
        "Web + Native Mobile Apps",
        "Fully custom architecture",
        "Scalable cloud infrastructure",
        "24/7 Premium support",
        "Digital marketing campaign",
        "Dedicated project manager"
      ],
      isPopular: false
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, label: "Clients Globally", value: "250+" },
    { icon: <Target className="w-6 h-6" />, label: "Projects Completed", value: "500+" },
    { icon: <Rocket className="w-6 h-6" />, label: "Success Rate", value: "99.9%" },
    { icon: <Award className="w-6 h-6" />, label: "Awards Won", value: "24" }
  ];

  return (
    <div className="pt-48 pb-40 px-6 lg:px-12 bg-[#030014] relative overflow-hidden">
      {/* About Section */}
      <section className="max-w-7xl mx-auto mb-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-indigo-400 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Nexus Philosophy</span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-10 leading-[0.9] tracking-tighter">Engineering <br /> <span className="italic text-indigo-500">Brilliance</span> for the Modern Web</h1>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed font-medium">
              Founded in 2020, YARA Brothers Digital Agency was born out of a desire to bridge the gap between complex engineering and human-centered design. We believe that every digital touchpoint is an opportunity to delight.
            </p>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed font-medium">
              Our mission is to empower businesses with cutting-edge tools that don't just work well but also look and feel exceptional. We combine strategic thinking with meticulous craftsmanship.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-[1.5rem] border border-white/5">
                  <div className="text-indigo-400 mb-2">{stat.icon}</div>
                  <div className="text-5xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-8">
              <div className="backdrop-blur-lg bg-white/5 p-16 rounded-[4rem] text-center group border-white/5 hover:border-indigo-500/30 transition-all">
                <Users className="w-14 h-14 text-indigo-500 mx-auto mb-8 group-hover:scale-110 transition-transform" />
                <h5 className="text-5xl font-black text-white mb-2 tracking-tighter">80+</h5>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Craftspeople</p>
              </div>
              <div className="bg-indigo-600/10 p-16 rounded-[4rem] border border-indigo-500/30 text-center mt-12 group hover:bg-indigo-600/20 transition-all">
                <Target className="w-14 h-14 text-white mx-auto mb-8 group-hover:rotate-12 transition-transform" />
                <h5 className="text-5xl font-black text-white mb-2 tracking-tighter">99%</h5>
                <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.2em]">Success Ratio</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter">Investment Models.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium">Clear, high-value engagement tiers designed for serious transformation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative flex flex-col p-12 rounded-[4rem] border group transition-all duration-700 ${
                  plan.isPopular ? 'bg-slate-900 border-indigo-500/50 shadow-[0_40px_80px_rgba(79,70,229,0.15)] ring-1 ring-indigo-500/20' : 'backdrop-blur-lg bg-white/5 border-white/5 hover:border-white/10 shadow-2xl'
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 px-8 py-3 bg-white text-indigo-950 text-[10px] font-black rounded-full uppercase tracking-[0.3em] shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
                    BEST VALUE
                  </span>
                )}
                
                <div className="mb-16">
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tighter uppercase">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-6xl font-black text-white tracking-tighter">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">/ Start</span>}
                  </div>
                  <p className="text-slate-400 font-medium text-lg leading-relaxed">{plan.description}</p>
                </div>

                <div className="flex-grow space-y-6 mb-16">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-4">
                      <div className="bg-indigo-500/10 p-1.5 rounded-xl mt-1">
                        <Check className="w-3.5 h-3.5 text-indigo-400" />
                      </div>
                      <span className="text-slate-300 font-medium text-sm leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-7 rounded-[2rem] font-black transition-all flex items-center justify-center gap-4 text-xs uppercase tracking-[0.2em] shadow-2xl active:scale-95 ${
                  plan.isPopular ? 'bg-white text-indigo-950 hover:bg-slate-100' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}>
                  Select Plan
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center">
             <div className="inline-flex items-center gap-4 backdrop-blur-lg bg-white/5 px-8 py-4 rounded-full border border-white/5 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
               <span className="text-indigo-500">i</span>
               Need something custom? <a href="#" className="text-white hover:underline">Contact our sales team</a>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPlansPage;
