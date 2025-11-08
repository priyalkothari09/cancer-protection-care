import { useState, useEffect } from 'react';

const DailyQuote = () => {
  const [quote, setQuote] = useState({
    text: "Hope is being able to see that there is light despite all of the darkness.",
    author: "Desmond Tutu"
  });
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.quotable.io/random?tags=inspirational|hope|motivational');
      const data = await response.json();
      setQuote({
        text: data.content,
        author: data.author
      });
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote({
        text: "Every day is a new beginning. Take a deep breath and start again.",
        author: "Unknown"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <section id="resources" className="w-full py-24 lg:py-32 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 lg:mb-20">
          <div className="inline-block px-6 py-2.5 bg-purple-100 rounded-full text-purple-600 font-semibold mb-6 text-sm lg:text-base">
            ✨ Daily Inspiration
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-2xl font-bold text-gray-900 mb-5 lg:mb-6">
            Words of Hope & Strength
          </h2>
          <p className="text-base md:text-lg lg:text-l text-gray-600 max-w-3xl leading-relaxed">
            Find daily inspiration and motivation to stay strong on your journey
          </p>
        </div>

        {/* Quote Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-10 lg:p-14 shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30"></div>

            {/* Quote Icon */}
            <div className="relative z-10">
              <div className="text-6xl text-purple-400 mb-6 opacity-50">"</div>

              {/* Quote Text */}
              <blockquote className="text-xl py-20 lg:text-2xl text-gray-800 font-medium leading-relaxed mb-8 relative z-10">
                {loading ? (
                  <span className="animate-pulse">Loading inspiration...</span>
                ) : (
                  quote.text
                )}
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between relative z-10">
                <p className="text-base lg:text-lg text-gray-600 font-semibold">
                  — {quote.author}
                </p>

                {/* Refresh Button */}
                <button
                  onClick={fetchQuote}
                  disabled={loading}
                  className="group bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <svg 
                    className={`w-5 h-5 ${loading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  New Quote
                </button>
              </div>
            </div>
          </div>
        </div>
        <br></br><br></br>

        {/* Resources Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mt-16 lg:mt-20">
          <a
            href="#"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-3xl mb-5">
              📚
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Resource Library</h3>
            <p className="text-gray-600 text-sm mb-4">
              Access guides, articles, and educational materials about cancer prevention and treatment.
            </p>
            <span className="text-pink-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Explore Resources
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>

          <a
            href="#"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-3xl mb-5">
              ☎️
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Helpline</h3>
            <p className="text-gray-600 text-sm mb-4">
              Connect with trained counselors anytime. We're here to listen and support you.
            </p>
            <span className="text-purple-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Call Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>

          <a
            href="#"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-3xl mb-5">
              👥
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Support Groups</h3>
            <p className="text-gray-600 text-sm mb-4">
              Join local and online support groups to connect with others on similar journeys.
            </p>
            <span className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Find Groups
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DailyQuote;