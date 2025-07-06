
import { Globe, Users, Clock, TrendingUp, Heart, Star, Award, Shield, CheckCircle, XCircle } from "lucide-react";

const WhyPhilippines = () => {
  const advantages = [
    {
      icon: Globe,
      title: "Native-Level English Fluency",
      description: "With a 95% English proficiency rate, Filipino VAs speak and write with clarity, confidence, and professionalism.",
      comparison: {
        positive: "Philippines: 95% proficiency",
        negative: "Other regions: 60–70% on average"
      },
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Strong Cultural Compatibility",
      description: "Thanks to a long history of Western influence, Filipino VAs understand U.S., Australian, and European business norms—ensuring smooth communication, respect for deadlines, and service-driven collaboration.",
      comparison: {
        positive: "Philippines: Naturally aligned with Western values",
        negative: "Other regions: Often face significant cultural gaps"
      },
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: Clock,
      title: "Ideal Time Zone Flexibility",
      description: "Whether you operate in North America, Europe, or Australia, Filipino assistants can work overlapping hours—or even overnight—to keep your operations moving.",
      comparison: {
        positive: "Philippines: Real-time collaboration across time zones",
        negative: "Other regions: Limited availability or inconvenient shifts"
      },
      color: "from-indigo-500 to-violet-500"
    },
    {
      icon: TrendingUp,
      title: "Exceptional Value for Money",
      description: "Get top-tier talent at a fraction of the cost. Filipino VAs deliver high-quality work with college-level education—at 60–80% less than Western equivalents.",
      comparison: {
        positive: "Philippines: High quality, low cost",
        negative: "Other regions: Compromises in either cost or quality"
      },
      color: "from-purple-600 to-indigo-600"
    }
  ];

  const stats = [
    { number: "95%", label: "English Proficiency Rate", sublabel: "Highest in Southeast Asia", icon: Globe },
    { number: "4.2M+", label: "College Graduates", sublabel: "Entering the Workforce", icon: Award },
    { number: "24/7", label: "Global Time Zone Coverage", sublabel: "", icon: Clock },
    { number: "15+", label: "Years Experience", sublabel: "In Remote Work Industry", icon: Star }
  ];

  return (
    <section id="why-philippines" className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-lavender-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-200 mb-6">
            <div className="text-2xl">🇵🇭</div>
            <span className="text-sm font-medium text-purple-700">The Philippines Advantage</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Why Hire Virtual Assistants from the
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Philippines?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Philippines has become the gold standard for virtual assistance—consistently outperforming other countries in communication, reliability, cultural fit, and value.
          </p>
        </div>

        {/* Key Stats Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Key Stats That Set the Philippines Apart
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-purple-100 shadow-lg">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm font-medium text-gray-700 mb-1">{stat.label}</div>
                {stat.sublabel && <div className="text-xs text-gray-500">{stat.sublabel}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* What Makes Filipino VAs the Best Choice */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Filipino Virtual Assistants the Best Choice?
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${advantage.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <advantage.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {advantage.title}
                      </h4>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {advantage.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-medium text-green-800">
                            {advantage.comparison.positive}
                          </span>
                        </div>
                        
                        <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                          <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-medium text-red-800">
                            {advantage.comparison.negative}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 max-w-2xl mx-auto">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Experience the Philippines Advantage?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of businesses that have discovered why Filipino VAs are the world's #1 choice for virtual assistance.
            </p>
            <a href="https://www.vabunny.com/register" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Heart className="w-5 h-5 inline mr-2" />
                Find Your Filipino VA Today
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPhilippines;
