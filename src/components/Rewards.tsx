import { DollarSign, Clock, Users, Star, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Rewards = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "No Hidden Fees",
      description: "Unlike other platforms, we don't charge any percentage fees when you hire VAs. Just pay our simple membership fee.",
      color: "from-green-500 to-emerald-500",
      stat: "0% commission on VA hires"
    },
    {
      icon: Clock,
      title: "24/7 Platform Access",
      description: "Access our VA marketplace anytime, anywhere with unlimited browsing and communication capabilities.",
      color: "from-blue-500 to-cyan-500",
      stat: "Unlimited platform usage"
    },
    {
      icon: Users,
      title: "Direct VA Connection",
      description: "Connect directly with VAs without intermediaries. Build relationships and negotiate rates freely.",
      color: "from-purple-500 to-pink-500",
      stat: "Direct communication with 2,500+ VAs"
    },
    {
      icon: Star,
      title: "Transparent VA Profiles",
      description: "Browse detailed VA profiles with portfolios, skills, experience, and rates. Make informed hiring decisions with complete transparency.",
      color: "from-yellow-500 to-orange-500",
      stat: "Complete profile transparency"
    }
  ];

  const pricingTiers = [
    {
      name: "Free Plan",
      price: "$0",
      period: "/month",
      description: "Create a free account to check out our website features before making any purchasing decisions.",
      features: [
        "Post 1 Job Post",
        "Browse VA Profiles",
        "Browse through our website"
      ],
      popular: false,
      color: "border-gray-200",
      mobileOrder: "order-2" // Show second on mobile
    },
    {
      name: "Paid Plan",
      price: "$47",
      originalPrice: "$94",
      period: "/month",
      description: "Full access to everything our platform offers",
      features: [
        "Unlimited Job Posting",
        "Unlimited VA Messaging",
        "Hire Unlimited Virtual Assistants",
        "0% Fees on Hires",
        "Advanced search & filters",
        "Priority customer support",
        "Earn money from our affiliate program"
      ],
      popular: true,
      color: "border-purple-400 bg-gradient-to-br from-purple-50 to-violet-50",
      sale: true,
      discount: "50% OFF",
      mobileOrder: "order-1" // Show first on mobile
    }
  ];

  return (
    <section id="rewards" className="py-20 bg-gradient-to-br from-purple-50 to-violet-50">
      <div className="container mx-auto px-4">
        {/* Benefits Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Why Choose
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">VABUNNY.COM</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The only platform that connects you directly with Filipino VAs without charging 
            percentage fees on your hires! 🇵🇭
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="group text-center p-8 bg-white rounded-2xl shadow-lg border border-purple-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {benefit.description}
              </p>

              <div className="text-sm font-semibold text-purple-600 bg-purple-100 rounded-full px-3 py-1">
                {benefit.stat}
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Simple, Transparent
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Membership Plans
            </span>
          </h3>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            No percentage fees, no hidden costs. Just straightforward membership pricing to access our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`relative p-8 rounded-3xl border-2 ${tier.color} ${tier.popular ? 'shadow-2xl scale-105' : 'shadow-lg bg-white'} transition-all duration-300 hover:shadow-2xl hover:scale-105 ${tier.mobileOrder} md:order-none`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {tier.sale && (
                <div className="absolute -top-2 -right-2">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12">
                    {tier.discount}
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h4>
                <div className="mb-3">
                  {tier.originalPrice && (
                    <div className="text-lg text-gray-500 line-through mb-1">
                      {tier.originalPrice}{tier.period}
                    </div>
                  )}
                  <span className="text-4xl lg:text-5xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-600">{tier.period}</span>
                  {tier.sale && (
                    <div className="text-sm text-green-600 font-semibold mt-1">
                      🎉 Limited Time Sale!
                    </div>
                  )}
                </div>
                <p className="text-gray-600">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {tier.name === "Free Plan" ? (
                <Link to="/register">
                  <button className="w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 border-2 border-purple-300 text-purple-700 hover:bg-purple-50">
                    Start Free
                  </button>
                </Link>
              ) : (
                <Link to="/register">
                  <button className="w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105">
                    Upgrade Now
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-purple-100 max-w-4xl mx-auto">
            <div className="text-6xl mb-6">🇵🇭</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Hire VAs Without Percentage Fees?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join VABUNNY.COM today and connect directly with skilled Filipino virtual assistants. 
              Pay only our simple membership fee - no commission on hires!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <button className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Users className="w-5 h-5 inline mr-2" />
                  Start Free Today
                </button>
              </Link>
              <Link to="/register">
                <button className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-full font-semibold text-lg transition-all">
                  View VA Profiles
                </button>
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mt-8 pt-8 border-t border-purple-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">0%</div>
                <div className="text-sm text-gray-600">Commission Fees</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">2,500+</div>
                <div className="text-sm text-gray-600">Skilled VAs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Platform Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
