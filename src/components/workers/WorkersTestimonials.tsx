import { Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const WorkersTestimonials = () => {
  const testimonials = [{
    name: "Maria Santos",
    role: "Executive Assistant",
    company: "US Tech Startup",
    salary: "₱30,000/month",
    image: "👩‍💼",
    quote: "I've been working with my US client for 8 months now through VABunny.com. The best part? No platform fees! I keep every peso I earn, unlike Upwork where they took 20% of my income.",
    rating: 5
  }, {
    name: "Jose Rivera",
    role: "Digital Marketing VA",
    company: "Australian Agency",
    salary: "₱40,000/month",
    image: "👨‍💻",
    quote: "Found my dream job in just 2 weeks! The employers here specifically want Filipino talent and understand our value. My Australian client has become a long-term partner, not just a project.",
    rating: 5
  }, {
    name: "Anna Dela Cruz",
    role: "Customer Success Manager",
    company: "Canadian SaaS Company",
    salary: "₱42,000/month",
    image: "👩‍🎓",
    quote: "After struggling with project-based work on other platforms, I finally found stability here. Full-time position, consistent pay, and genuine career growth opportunities with my Canadian employer.",
    rating: 5
  }];
  return <section className="py-20 bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Success Stories from
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Filipino VAs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from virtual assistants who found their dream careers through our platform
          </p>
        </div>

        <div className="mb-16 px-12">
          <Carousel opts={{
          align: "start",
          loop: true
        }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow relative h-full">
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                    
                    <div className="flex items-center mb-6">
                      
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-xs text-purple-600">{testimonial.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>

                    <div className="bg-gradient-to-r from-green-50 to-purple-50 rounded-lg p-3 border border-green-200">
                      <div className="text-center">
                        <span className="text-sm text-gray-600">Monthly Salary: </span>
                        <span className="font-bold text-green-600">{testimonial.salary}</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Stats highlight */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl p-12 text-white text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">90%</div>
              <div className="text-lg">VA Satisfaction Rate</div>
              <div className="text-sm opacity-90 mt-1">Long-term job placements</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₱40K</div>
              <div className="text-lg">Average Monthly Salary</div>
              <div className="text-sm opacity-90 mt-1">30% higher than competitors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8 mos</div>
              <div className="text-lg">Average Job Duration</div>
              <div className="text-sm opacity-90 mt-1">Stable, long-term positions</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WorkersTestimonials;