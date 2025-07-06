
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in your name, email, and message.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/mvgrnqzk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Contact Form Submission',
          message: formData.message
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent! 📧",
          description: "Thank you for contacting us. We'll get back to you within 24 hours."
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16 pt-24 max-w-4xl">
        <div className="text-center space-y-8">
          {/* Header Section */}
          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-full shadow-xl">
                <Mail className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Contact <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">VABunny</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 font-medium max-w-2xl mx-auto">
              Get in touch with us. We'd love to hear from you!
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg font-semibold text-gray-800">
                  Full Name *
                </Label>
                <Input 
                  id="name" 
                  name="name" 
                  type="text" 
                  placeholder="Your full name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className="h-12 border-purple-200 focus:border-purple-400" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg font-semibold text-gray-800">
                  Email Address *
                </Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="your.email@example.com" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className="h-12 border-purple-200 focus:border-purple-400" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-lg font-semibold text-gray-800">
                  Subject
                </Label>
                <Input 
                  id="subject" 
                  name="subject" 
                  type="text" 
                  placeholder="What's this about?" 
                  value={formData.subject} 
                  onChange={handleInputChange} 
                  className="h-12 border-purple-200 focus:border-purple-400" 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-lg font-semibold text-gray-800">
                  Message *
                </Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell us how we can help you..." 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  className="min-h-[120px] border-purple-200 focus:border-purple-400 resize-none" 
                  required 
                />
              </div>

              <Button 
                type="submit" 
                disabled={isLoading} 
                size="lg" 
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white text-lg h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          
        </div>
      </main>
    </div>
  );
};

export default Contact;
