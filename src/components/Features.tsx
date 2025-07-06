import { Users, Clock, Heart, TrendingUp, Shield, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Features = () => {
  const features = [{
    icon: Users,
    title: "Elite Filipino Talent at Your Fingertips",
    description: "Unlock access to a highly skilled workforce of college-educated Filipino professionals—celebrated for their exceptional English, strong work ethic, and years of proven remote work success.",
    color: "from-blue-500 to-cyan-500"
  }, {
    icon: Clock,
    title: "24/7 Productivity Without the Overhead",
    description: "Stay ahead of the clock with virtual assistants who work across time zones, keeping your operations running smoothly around the clock and accelerating project delivery.",
    color: "from-yellow-500 to-orange-500"
  }, {
    icon: Heart,
    title: "Seamless Cultural Fit",
    description: "Work with professionals who instinctively understand Western business practices, deadlines, and communication norms—ensuring smoother collaboration and better results from day one.",
    color: "from-green-500 to-emerald-500"
  }, {
    icon: TrendingUp,
    title: "Premium Quality at a Fraction of the Cost",
    description: "Reduce overhead by up to 70% without sacrificing performance. Get top-tier talent that delivers big-business results—at pricing built for growing companies.",
    color: "from-purple-500 to-pink-500"
  }, {
    icon: Shield,
    title: "Smart, Streamlined Hiring Platform",
    description: "Easily find and connect with the right talent for your needs. Our intuitive platform simplifies the process so you can hire quickly and confidently.",
    color: "from-indigo-500 to-purple-500"
  }, {
    icon: Award,
    title: "You're in Control—Always",
    description: "Browse profiles, run interviews, and make hiring decisions on your terms. No middlemen. No markups. Just direct access to the talent your business needs.",
    color: "from-red-500 to-pink-500"
  }];
  return <section id="features" className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-lavender-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Why Smart Businesses Choose
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">VABUNNY.COM</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover the competitive advantage of hiring Filipino assistants to support your day-to-day business operations—and why our platform is the ideal choice for doing so.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:-translate-y-2">
              <div className="mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>)}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 max-w-3xl mx-auto">
            <div className="text-6xl mb-4">🇵🇭</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              The Philippines: Your Secret Weapon for Business Growth
            </h3>
            <p className="text-gray-600 leading-relaxed">
              With 95% English proficiency, strong Western cultural alignment, and a natural service-oriented mindset, 
              Filipino virtual assistants don't just complete tasks – they become integral partners in your success story.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            
            
            <Link to="/register">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Users className="w-5 h-5 mr-2" />
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default Features;