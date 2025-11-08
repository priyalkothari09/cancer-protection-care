const Stories = () => {
  const stories = [
    {
      name: "Priya Sharma",
      age: 42,
      type: "Breast Cancer Survivor",
      story:
        "After my diagnosis, Jarurat Care connected me with a support group that changed my life. The emotional support and resources helped me through my darkest days. Today, I'm 5 years cancer-free and helping others.",
      image: "PS",
      gradient: "from-pink-400 to-rose-400",
      years: "5 years cancer-free",
    },
    {
      name: "Rajesh Kumar",
      age: 55,
      type: "Lung Cancer Survivor",
      story:
        "The early screening program saved my life. I was diagnosed at Stage 1 thanks to their awareness campaign. The 24/7 helpline was there for me and my family every step of the way.",
      image: "RK",
      gradient: "from-purple-400 to-indigo-400",
      years: "3 years cancer-free",
    },
    {
      name: "Anjali Mehta",
      age: 38,
      type: "Cervical Cancer Survivor",
      story:
        "Jarurat Care didn't just help me beat cancer—they helped me find hope. From treatment guidance to emotional counseling, they were with me throughout. Now I volunteer to give back.",
      image: "AM",
      gradient: "from-blue-400 to-cyan-400",
      years: "4 years cancer-free",
    },
  ];

  return (
    <section id="stories" className="py-30 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-55 py-4 bg-pink-100 rounded-full text-pink-600 font-semibold mb-4">
            💗 Survivor Stories
          </div>
          <br></br><br></br>
          <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4">
            Stories of Hope & Strength
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real people, real journeys, real hope. These survivors inspire us
            every day to continue our mission.
          </p>
        </div>
<br></br><br></br>
        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-40 lg:gap-16">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Avatar */}
              <div className="flex items-center mb-5">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${story.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform`}
                >
                  {story.image}
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    {story.name}
                  </h3>
                  <p className="text-xs text-gray-500">{story.type}</p>
                </div>
              </div>

              {/* Badge */}
              <div
                className={`inline-block px-3 py-1 bg-gradient-to-r ${story.gradient} text-white text-xs font-semibold rounded-full mb-3`}
              >
                ✨ {story.years}
              </div>

              {/* Story */}
              <p className="text-gray-700 leading-relaxed mb-3 italic text-sm">
                "{story.story}"
              </p>

              {/* Age */}
              <p className="text-xs text-gray-500">
                Age at diagnosis: {story.age}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition transform hover:scale-105"
          >
            Share Your Story
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
        <br></br><br></br>
      </div>
    </section>
  );
};

export default Stories;