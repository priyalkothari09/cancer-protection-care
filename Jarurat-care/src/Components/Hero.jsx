import { useState, useEffect } from 'react';

const Hero = () => {
  const [stats, setStats] = useState({
    lives: 0,
    groups: 0,
    hours: 0
  });

  useEffect(() => {
    const animateCounter = (target, key) => {
      let current = 0;
      const increment = target / 80;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setStats(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, 25);
    };

    animateCounter(35000, 'lives');
    animateCounter(850, 'groups');
    animateCounter(24, 'hours');
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16 py-20 lg:py-24 relative z-10 w-full">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Badge */}
          <div className="inline-block px-6 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-sm lg:text-base font-semibold mb-8">
            🎗️ Together We Are Beating Cancer
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 lg:mb-8 leading-tight max-w-5xl">
            Awareness. Support.
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Hope for Everyone.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed text-gray-300">
            Access awareness tools, prevention resources, survivor stories, and 24/7 support from our caring community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 lg:mb-20">
            <a
              href="#contact"
              className="group bg-gradient-to-r from-pink-600 to-purple-600 px-10 py-4 lg:px-12 lg:py-4 rounded-full font-bold text-base lg:text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Request Support
              <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#resources"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 px-10 py-4 lg:px-12 lg:py-4 rounded-full font-bold text-base lg:text-lg hover:bg-white/20 transition"
            >
              Browse Resources
            </a>
          </div>

          {/* Animated Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 lg:p-10 border border-white/20 hover:bg-white/20 transition">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-pink-400 mb-2">
                {stats.lives.toLocaleString()}+
              </div>
              <div className="text-sm lg:text-base text-gray-300">People Supported</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 lg:p-10 border border-white/20 hover:bg-white/20 transition">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-purple-400 mb-2">
                {stats.groups.toLocaleString()}+
              </div>
              <div className="text-sm lg:text-base text-gray-300">Support Groups</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 lg:p-10 border border-white/20 hover:bg-white/20 transition">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-400 mb-2">
                {stats.hours}/7
              </div>
              <div className="text-sm lg:text-base text-gray-300">Available Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;