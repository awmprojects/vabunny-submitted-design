import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import LogoIcon from "@/components/LogoIcon";
import Header from "@/components/Header";

const FreeGift = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Get URL parameters for dynamic tagging
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source') || '';
      const utmMedium = urlParams.get('utm_medium') || '';
      const utmCampaign = urlParams.get('utm_campaign') || '';
      const referrer = document.referrer || 'direct';
      
      // Submit to ConvertKit with auto-tagging and segmentation
      const formData = new FormData();
      formData.append('email_address', email);
      formData.append('first_name', ''); // Optional field
      
      // Static tags for this specific lead magnet
      formData.append('tags[]', 'free-gift-page');
      formData.append('tags[]', 'employers-newsletter');
      formData.append('tags[]', 'lead-magnet-subscriber');
      
      // Dynamic tags based on traffic source
      if (utmSource) {
        formData.append('tags[]', `source-${utmSource}`);
      }
      if (utmMedium) {
        formData.append('tags[]', `medium-${utmMedium}`);
      }
      if (utmCampaign) {
        formData.append('tags[]', `campaign-${utmCampaign}`);
      }
      
      // Custom fields for segmentation
      formData.append('fields[source_page]', 'free-gift');
      formData.append('fields[signup_timestamp]', new Date().toISOString());
      formData.append('fields[referrer]', referrer);
      formData.append('fields[user_agent]', navigator.userAgent);
      
      // UTM tracking fields
      if (utmSource) formData.append('fields[utm_source]', utmSource);
      if (utmMedium) formData.append('fields[utm_medium]', utmMedium);
      if (utmCampaign) formData.append('fields[utm_campaign]', utmCampaign);

      const response = await fetch('https://app.kit.com/forms/8269649/subscriptions', {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // ConvertKit doesn't support CORS, but the submission will still work
      });

      toast({
        title: "Successfully Subscribed! 🎉",
        description: "Thank you for subscribing! Check your email to confirm your subscription.",
      });

      // Navigate to newsletter page with email as query parameter
      const params = new URLSearchParams();
      params.set('email', email);
      navigate(`/newsletter?${params.toString()}`);
    } catch (error) {
      toast({
        title: "Subscription Successful",
        description: "Thank you for subscribing! Please check your email to confirm.",
      });
      
      // Navigate to newsletter page with email as query parameter even on error
      const params = new URLSearchParams();
      params.set('email', email);
      navigate(`/newsletter?${params.toString()}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16 pt-24 max-w-4xl">
        <div className="text-center space-y-8">
          {/* Logo and Hero Section */}
          <div className="space-y-6">
            <LogoIcon className="mx-auto" size="desktop" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Thinking About Hiring a Virtual Assistant in the Philippines?
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 font-medium max-w-2xl mx-auto">
              Not sure where to begin? We've got you covered.
            </p>
          </div>

          {/* Main Value Proposition */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 max-w-3xl mx-auto">
            <div className="space-y-8">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Get free lifetime access to the <strong className="text-purple-600">VABunny Employers Success Newsletter</strong> (normally costing $49/yr) —your 
                step-by-step guide to building a remote team, automating your business, and saving time and money with top-tier Filipino talent.
              </p>
              
              {/* Benefits */}
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <div className="flex items-start gap-4">
                  <span className="text-green-500 font-bold text-xl mt-1">✅</span>
                  <span className="text-gray-700 text-lg">Expert tips on hiring & managing virtual assistants</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-green-500 font-bold text-xl mt-1">✅</span>
                  <span className="text-gray-700 text-lg">Proven strategies to grow your business with less effort</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-green-500 font-bold text-xl mt-1">✅</span>
                  <span className="text-gray-700 text-lg">Tools, templates, and insider secrets you won't find anywhere else</span>
                </div>
              </div>
              
              {/* Email Form */}
              <form onSubmit={handleSubscribe} className="space-y-6 max-w-md mx-auto">
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-14 text-center text-lg border-purple-200 focus:border-purple-400"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isLoading}
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white text-sm sm:text-lg h-12 sm:h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="hidden sm:inline">Subscribing...</span>
                      <span className="sm:hidden">Subscribing...</span>
                    </div>
                  ) : (
                    <>
                      <span className="hidden sm:inline">Claim Your Free Lifetime Access Now</span>
                      <span className="sm:hidden">Get Free Lifetime Access</span>
                    </>
                  )}
                </Button>
              </form>
              
              {/* Pricing Highlight */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <p className="text-gray-700">
                  <span className="line-through text-gray-500 text-lg">Regularly $49/year</span>
                  <span className="text-purple-600 font-bold text-lg"> — now 100% free for a limited time.</span>
                  <br />
                  <span className="text-gray-700 text-base mt-2 block">
                    Just enter your email above and unlock the knowledge to scale smarter utilizing the power of VABunny.com.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Additional Trust Elements */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <p className="text-gray-600">
              Join thousands of entrepreneurs who are already building successful remote teams with Filipino virtual assistants.
            </p>
            <p className="text-sm text-gray-500">
              No spam. Unsubscribe at any time. Your email is safe with us.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FreeGift;