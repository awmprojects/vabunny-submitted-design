import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import LogoIcon from "@/components/LogoIcon";

const WorkersConversionPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has already subscribed to newsletter
    const hasNewsletterCookie = document.cookie
      .split('; ')
      .some(cookie => cookie.startsWith('newsletter_subscribed=true'));

    if (!hasNewsletterCookie) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000); // Show popup after 3 seconds

      return () => clearTimeout(timer);
    }
  }, []);

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
      formData.append('tags[]', 'find-a-job-page');
      formData.append('tags[]', 'workers-newsletter');
      formData.append('tags[]', 'job-seeker');
      formData.append('tags[]', 'va-career-starter');
      
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
      formData.append('fields[source_page]', 'find-a-job');
      formData.append('fields[signup_timestamp]', new Date().toISOString());
      formData.append('fields[referrer]', referrer);
      formData.append('fields[user_agent]', navigator.userAgent);
      
      // UTM tracking fields
      if (utmSource) formData.append('fields[utm_source]', utmSource);
      if (utmMedium) formData.append('fields[utm_medium]', utmMedium);
      if (utmCampaign) formData.append('fields[utm_campaign]', utmCampaign);

      const response = await fetch('https://app.kit.com/forms/8269774/subscriptions', {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // ConvertKit doesn't support CORS, but the submission will still work
      });

      // Set cookie to prevent popup from showing again
      const expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      document.cookie = `newsletter_subscribed=true; expires=${expiryDate.toUTCString()}; path=/`;

      toast({
        title: "Successfully Subscribed! 🎉",
        description: "Thank you for subscribing! Check your email to confirm your subscription.",
      });

      // Navigate to newsletter page with email as query parameter
      const params = new URLSearchParams();
      params.set('email', email);
      navigate(`/newsletter?${params.toString()}`);
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Subscription Successful",
        description: "Thank you for subscribing! Please check your email to confirm.",
      });
      
      // Set cookie even on error since the form submission likely worked
      const expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      document.cookie = `newsletter_subscribed=true; expires=${expiryDate.toUTCString()}; path=/`;
      
      // Navigate to newsletter page with email as query parameter even on error
      const params = new URLSearchParams();
      params.set('email', email);
      navigate(`/newsletter?${params.toString()}`);
      setIsOpen(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[95vw] sm:max-w-lg max-h-[90vh] overflow-y-auto bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 p-4 sm:p-6">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2 sm:right-4 sm:top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <DialogHeader className="text-center space-y-3 sm:space-y-4">
          <LogoIcon className="mx-auto" size="mobile" />
          <DialogTitle className="text-lg sm:text-xl font-bold text-gray-900 leading-tight px-2">
            Ready to Start Your Virtual Assistant Career in the Philippines?
          </DialogTitle>
          <p className="text-base sm:text-lg text-gray-700 font-medium px-2">
            Not sure how to get started? We'll show you the way.
          </p>
        </DialogHeader>
        
        <div className="space-y-4 sm:space-y-6 py-2 sm:py-4">
          <p className="text-center text-gray-700 leading-relaxed text-sm sm:text-base px-2">
            Get free lifetime access to the <strong className="text-purple-600">VABunny Workers Success Newsletter</strong> (normally costing 1000 PHP per year) —your 
            step-by-step guide to landing high-paying virtual assistant jobs, building in-demand skills, and creating a successful remote career.
          </p>
          
          <div className="space-y-2 sm:space-y-3 text-left">
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-green-500 font-bold text-base sm:text-lg">✅</span>
              <span className="text-gray-700 text-sm sm:text-base">Expert tips on landing your first VA job and standing out to employers</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-green-500 font-bold text-base sm:text-lg">✅</span>
              <span className="text-gray-700 text-sm sm:text-base">Proven strategies to build skills that command higher rates</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-green-500 font-bold text-base sm:text-lg">✅</span>
              <span className="text-gray-700 text-sm sm:text-base">Job alerts, career templates, and insider secrets from successful VAs</span>
            </div>
          </div>
          
          <form onSubmit={handleSubscribe} className="space-y-3 sm:space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 sm:h-12 text-center text-base sm:text-lg border-purple-200 focus:border-purple-400"
                required
              />
            </div>
            
            <Button
              type="submit"
              disabled={isLoading}
              size="lg"
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white text-sm sm:text-lg h-10 sm:h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="hidden sm:inline">Subscribing...</span>
                  <span className="sm:hidden">Subscribing...</span>
                </div>
              ) : (
                <>
                  <span className="hidden sm:inline">Start Your VA Career Journey Today</span>
                  <span className="sm:hidden">Start Your VA Career</span>
                </>
              )}
            </Button>
          </form>
          
          <div className="text-center bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-gray-700">
              <span className="line-through text-gray-500">Regularly 1000 PHP per year</span>
              <span className="text-purple-600 font-bold"> — now 100% free for a limited time.</span>
              <br />
              <span className="text-gray-700">
                Join thousands of successful Filipino VAs who started their journey with VABunny.com.
              </span>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkersConversionPopup;