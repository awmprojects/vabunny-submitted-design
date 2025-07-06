import { Plus, Minus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [{
    question: "How much does it cost to hire a Filipino virtual assistant?",
    answer: "Hiring a virtual assistant starts at approximately $500 USD per month for full-time work (40 hours/week). Pricing varies based on skills, experience, and specialized services. This rate is highly competitive compared to hiring locally while getting access to top-tier Filipino talent."
  }, {
    question: "What services can Filipino VAs provide?",
    answer: "Filipino VAs are skilled in administrative support, customer service, digital marketing, social media management, data entry, bookkeeping, content creation, email management, appointment setting, and much more. Many also have specialized skills in graphic design, web development, and technical support."
  }, {
    question: "How do I get started as a virtual assistant on VABunny.com?",
    answer: "Simply create your VA profile, showcase your skills and experience, and start applying for jobs. We provide resources to help you build an attractive profile and connect with potential clients."
  }, {
    question: "Are Filipino VAs reliable for long-term partnerships?",
    answer: "Absolutely! Filipino VAs are known for their strong work ethic, loyalty, and commitment to long-term partnerships. Many of our VAs have been working with the same clients for years, building trust and becoming integral parts of their business operations."
  }, {
    question: "What are the working hours for Filipino VAs?",
    answer: "Filipino VAs are flexible and can work across different time zones. Many work US hours (9 AM - 6 PM EST), while others accommodate Australian, European, or Asian business hours. We help match VAs with clients based on preferred working schedules."
  }, {
    question: "How is payment handled on the platform?",
    answer: "Employers handle payments to their VAs directly offsite - we don't charge any percentage fees on those payments. We recommend using PayPal as it's currently the best payment option for paying workers in the Philippines, offering secure and reliable transfers. All payment arrangements are made directly between employers and VAs, giving you complete control over your payment terms and schedule."
  }, {
    question: "What makes Filipino VAs different from other virtual assistants?",
    answer: "Filipino VAs are known for excellent English proficiency (Philippines has one of the largest English-speaking populations globally), strong cultural compatibility with Western businesses, high education levels, and exceptional work ethics. They're also cost-effective without compromising quality."
  }];
  return <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Frequently Asked
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions about hiring Filipino virtual assistants or finding VA work? 
            We've got the answers to help you get started! 🇵🇭
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg border border-purple-100 p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-purple-200 rounded-2xl px-6 py-2 bg-gradient-to-r from-purple-50 to-indigo-50">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-purple-600 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>

        
      </div>
    </section>;
};

export default FAQ;
