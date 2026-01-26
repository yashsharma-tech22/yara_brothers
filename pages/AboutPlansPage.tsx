
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Users, Target, Rocket, Award } from 'lucide-react';

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
    <div className="pt-32 pb-24">
      {/* About Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Engineering <span className="text-indigo-500">Brilliance</span> for the Modern Web</h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Founded in 2020, YARA Brothers Digital Agency was born out of a desire to bridge the gap between complex engineering and human-centered design. We believe that every digital touchpoint is an opportunity to delight.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Our mission is to empower businesses with cutting-edge tools that don't just work well but also look and feel exceptional. We combine strategic thinking with meticulous craftsmanship.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-indigo-500 mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <img src="https://picsum.photos/seed/office-1/400/500" className="rounded-2xl w-full h-[400px] object-cover" alt="Office space" />
            <div className="flex flex-col gap-4 mt-8">
              <img src="https://picsum.photos/seed/office-2/400/300" className="rounded-2xl w-full h-[200px] object-cover" alt="Meeting" />
              <img src="https://picsum.photos/seed/office-3/400/300" className="rounded-2xl w-full h-[200px] object-cover" alt="Design work" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-900/50 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Pricing & Plans</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Transparent, flexible pricing for businesses of all sizes. Choose a plan that suits your growth stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative bg-gray-950 p-10 rounded-3xl border-2 transition-all duration-300 ${
                  plan.isPopular ? 'border-indigo-600 shadow-2xl shadow-indigo-500/10' : 'border-white/5'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold py-1.5 px-4 rounded-full flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-current" />
                    BEST VALUE
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-500 ml-1">/project</span>}
                </div>
                <p className="text-gray-400 text-sm mb-8 min-h-[48px]">
                  {plan.description}
                </p>

                <div className="space-y-4 mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className="mt-1 bg-indigo-500/20 text-indigo-500 p-0.5 rounded">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className={`w-full py-4 rounded-xl font-bold transition-all ${
                    plan.isPopular 
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20' 
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  Select Plan
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-500 italic">
              Need something custom? <a href="#" className="text-indigo-400 font-bold hover:underline">Contact our sales team</a> for a tailored quote.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPlansPage;
