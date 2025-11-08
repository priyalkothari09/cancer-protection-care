const Mission = () => {
  const missions = [
    {
      icon: "📢",
      title: "Awareness Campaigns",
      description: "Educational programs and community outreach to spread knowledge about cancer prevention and early detection.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: "🛡️",
      title: "Prevention Resources",
      description: "Access screening information, lifestyle guidance, and preventive care resources to reduce cancer risk.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: "🤝",
      title: "Patient Support",
      description: "24/7 emotional support, survivor networks, and resources for patients and their families throughout their journey.",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="mission" className="w-full py-40 lg:py-45 xl:py-55 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-20 lg:mb-28">
          <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">
            Our Mission
          </h2>
          <br></br><br></br>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl leading-relaxed">
            We're dedicated to supporting individuals and families affected by cancer through awareness, prevention, and compassionate care.
          </p>
        </div>
        <br></br><br></br>
        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14 xl:gap-16">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl lg:rounded-3xl p-10 lg:p-12 xl:p-14 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon with Gradient */}
              <div className={`w-18 h-18 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-br ${mission.color} rounded-2xl flex items-center justify-center text-4xl lg:text-5xl mb-8 lg:mb-10 group-hover:scale-110 transition-transform`}>
                {mission.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-xl xl:text-xl font-bold text-gray-900 mb-4 lg:mb-5">
                {mission.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                {mission.description}
              </p>

              {/* Hover Effect Arrow */}
              <div className="mt-8 lg:mt-10 flex items-center text-pink-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-base lg:text-lg">
                Learn More
                <svg className="w-5 h-5 lg:w-6 lg:h-6 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;