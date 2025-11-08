import { useState, useEffect } from 'react';

const Stats = () => {
  const [counts, setCounts] = useState({
    survivors: 0,
    screened: 0,
    support: 0,
    research: 0
  });

  useEffect(() => {
    const animateValue = (key, end, duration = 2000) => {
      const start = 0;
      const increment = end / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCounts(prev => ({ ...prev, [key]: end }));
          clearInterval(timer);
        } else {
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, 16);
    };

    animateValue('survivors', 18000);
    animateValue('screened', 50000);
    animateValue('support', 850);
    animateValue('research', 5);
  }, []);

  const stats = [
    {
      value: counts.survivors,
      suffix: '+',
      label: 'Cancer Survivors Supported',
      icon: '💪',
      color: 'from-pink-500 to-rose-500'
    },
    {
      value: counts.screened,
      suffix: '+',
      label: 'People Screened',
      icon: '🔬',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      value: counts.support,
      suffix: '+',
      label: 'Support Groups',
      icon: '👥',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      value: counts.research,
      suffix: 'M+',
      label: 'Research Funding',
      icon: '🧬',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="stats" className="w-full py-32 lg:py-50 xl:py-60 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-24 lg:mb-32">
          <h2 className="text-3xl md:text-2xl lg:text-3xl font-bold mb-5 lg:mb-6">
            Our Impact
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Together, we're making a real difference in the fight against cancer
          </p>
        </div>

        {/* Stats Grid - Improved Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-12 xl:gap-14">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-2xl lg:rounded-2xl p-10 lg:p-12 xl:p-14 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-3xl lg:text-4xl mb-8 lg:mb-10 group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <div className="text-3xl lg:text-4xl xl:text-5xl font-black mb-3 lg:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-gray-300 text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;