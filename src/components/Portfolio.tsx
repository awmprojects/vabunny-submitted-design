import { Star, Users, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const successStories = [
    {
      id: 1,
      clientName: "TechStart Solutions",
      vaName: "Maria Santos",
      role: "Executive Assistant",
      duration: "18 months",
      savings: "$2,400/month",
      image: "photo-1649972904349-6e44c42644a7",
      testimonial: "Maria transformed our chaotic operations into a well-oiled machine. Her attention to detail and proactive approach saved us countless hours and thousands of dollars. Best investment we've ever made!",
      results: ["Streamlined operations by 80%", "Saved $2,400 monthly vs. local hire", "Improved response time by 60%"],
      rating: 5,
      tags: ["Admin Excellence", "Email Management", "Strategic Planning"]
    },
    {
      id: 2,
      clientName: "Digital Marketing Pro",
      vaName: "John Dela Cruz",
      role: "Marketing Specialist",
      duration: "12 months",
      savings: "$3,200/month",
      image: "photo-1488590528505-98d2b5aba04b",
      testimonial: "John doesn't just execute marketing tasks – he thinks strategically and brings fresh ideas that have revolutionized our brand presence. His English is flawless and his marketing instincts are spot-on!",
      results: ["Boosted social engagement by 300%", "Generated 150+ qualified leads monthly", "Reduced marketing costs by $3,200/month"],
      rating: 5,
      tags: ["Strategic Marketing", "Content Creation", "Lead Generation"]
    },
    {
      id: 3,
      clientName: "E-commerce Empire",
      vaName: "Sarah Reyes",
      role: "Customer Success Manager",
      duration: "24 months",
      savings: "$1,800/month",
      image: "photo-1581091226825-a6a2a5aee158",
      testimonial: "Sarah has become the heart of our customer experience. She anticipates needs, resolves issues before they escalate, and treats every customer like family. Our retention rates have never been higher!",
      results: ["Achieved 98% customer satisfaction", "Reduced response time to under 1 hour", "Manages 300+ daily customer interactions"],
      rating: 5,
      tags: ["Customer Excellence", "24/7 Support", "Relationship Building"]
    }
  ];

  const scrollToServices = () => {
    // Scroll to services section
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Real Results,
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Real Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See how Filipino virtual assistants have become game-changers 
            for businesses across industries, delivering measurable results and exceptional ROI! 🇵🇭
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {successStories.map(story => (
            <div key={story.id} className="group bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 shadow-lg border border-purple-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{story.clientName}</h3>
                    <p className="text-purple-600 font-medium">{story.vaName} • {story.role}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{story.duration}</p>
                  </div>
                </div>
              </div>

              <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                "{story.testimonial}"
              </blockquote>

              <div className="space-y-3 mb-6">
                {story.results.map((result, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">{result}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {story.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-purple-200">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">Monthly Savings:</span>
                </div>
                <span className="text-lg font-bold text-green-600">{story.savings}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-12 border border-purple-100">
            <div className="text-6xl mb-6">🇵🇭</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Your Success Story Starts Here
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the ranks of successful businesses that have unlocked exponential growth with Filipino virtual assistants. 
              Your competitive advantage is just one click away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Users className="w-5 h-5 mr-2" />
                  Start Your Success Story
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-full font-semibold text-lg transition-all"
                onClick={scrollToServices}
              >
                Explore More Success Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
