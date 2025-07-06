
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Mail, Users, Award, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";
import { useNavigate, Link } from "react-router-dom";

const Scholarship = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to enter the scholarship giveaway.",
        variant: "destructive"
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
      formData.append('tags[]', 'scholarship-page');
      formData.append('tags[]', 'scholarship-giveaway');
      formData.append('tags[]', 'student-lead');
      formData.append('tags[]', 'education-focused');

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
      formData.append('fields[source_page]', 'scholarship');
      formData.append('fields[signup_timestamp]', new Date().toISOString());
      formData.append('fields[referrer]', referrer);
      formData.append('fields[user_agent]', navigator.userAgent);

      // UTM tracking fields
      if (utmSource) formData.append('fields[utm_source]', utmSource);
      if (utmMedium) formData.append('fields[utm_medium]', utmMedium);
      if (utmCampaign) formData.append('fields[utm_campaign]', utmCampaign);
      const response = await fetch('https://app.kit.com/forms/8269807/subscriptions', {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // ConvertKit doesn't support CORS, but the submission will still work
      });
      toast({
        title: "Entry Submitted! 🎉",
        description: "You've successfully entered the VABunny Scholarship Giveaway! Check your email to confirm your entry."
      });

      // Navigate to newsletter page with email as query parameter
      const params = new URLSearchParams();
      params.set('email', email);
      navigate(`/newsletter?${params.toString()}`);
    } catch (error) {
      toast({
        title: "Entry Submitted! 🎉",
        description: "You've successfully entered the VABunny Scholarship Giveaway! Please check your email to confirm."
      });

      // Navigate to newsletter page with email as query parameter even on error
      const params = new URLSearchParams();
      params.set('email', email);
      navigate(`/newsletter?${params.toString()}`);
    } finally {
      setIsLoading(false);
    }
  };

  return <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16 pt-24 max-w-4xl">
        <div className="text-center space-y-8">
          {/* Logo and Hero Section */}
          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-full shadow-xl">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              VABunny <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Scholarship Giveaway</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 font-medium max-w-2xl mx-auto">5 Educational Scholarships for Filipino Students • Academic Year 2025-2026</p>
          </div>

          {/* Main Value Proposition */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 max-w-3xl mx-auto">
            <div className="space-y-8">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Enter for your chance to win a <strong className="text-purple-600">full educational scholarship worth up to ₱60,000</strong> for the 2025-2026 academic year.
              </p>
              
              {/* Benefits */}
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <div className="flex items-start gap-4">
                  <span className="text-green-500 font-bold text-xl mt-1">✅</span>
                  <span className="text-gray-700 text-lg">Complete tuition coverage for entire academic year up to ₱60,000</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-green-500 font-bold text-xl mt-1">✅</span>
                  <span className="text-gray-700 text-lg">Use the funds at the university of your choice (towards any degree)</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-green-500 font-bold text-xl mt-1">✅</span>
                  <span className="text-gray-700 text-lg">Free lifetime access to the VABunny.com Workers Success Newsletter (normally costing 1000 PHP per year)</span>
                </div>
                
              </div>
              
              {/* Email Form */}
              <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-lg font-semibold text-gray-800">(Step 1) - Enter Your Email Address Below</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" value={email} onChange={e => setEmail(e.target.value)} className="w-full h-14 text-center text-lg border-purple-200 focus:border-purple-400" required />
                </div>
                
                <Button type="submit" disabled={isLoading} size="lg" className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white text-sm sm:text-lg h-12 sm:h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  {isLoading ? <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Entering Giveaway...</span>
                    </div> : <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5" />
                      <span>Enter Scholarship Giveaway</span>
                    </div>}
                </Button>

                {/* Step 2 Text */}
                <div className="py-2">
                  <p className="text-lg font-semibold text-gray-800">(Step 2) - Complete VABunny.com Portal signup (as a Worker) + Confirm via email</p>
                </div>

                {/* Registration Button - Updated to link to registration page */}
                <Link to="/register" className="block w-full">
                  <Button type="button" size="lg" className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white text-sm sm:text-lg h-12 sm:h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5" />
                      <span>Create your Account</span>
                    </div>
                  </Button>
                </Link>

                {/* Duplicate Step 2 Text */}
                <div className="py-2">
                  <p className="text-lg font-semibold text-gray-800">(Step 3 - Optional) - Invite your friends, family & followers to participate to increase your chances of winning. Each successful invite gives you 1 additional Scholarship giveaway raffle entry. Get your link via "Affiliates" page in the VABunny.com members area - scroll to Scholarship Giveaway link box on the page.</p>
                </div>

                {/* Duplicate Registration Button - Updated to link to affiliate dashboard and open in new tab */}
                <a href="https://www.vabunny.com/dashboard/worker/affiliate" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button type="button" size="lg" className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white text-sm sm:text-lg h-12 sm:h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5" />
                      <span>Get your Referral Link via &quot;Affiliates&quot; page</span>
                    </div>
                  </Button>
                </a>
              </form>
              
              {/* Pricing Highlight */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <p className="text-gray-700">
                  <span className="text-purple-600 font-bold text-lg">5 scholarships available</span>
                  <span className="text-gray-700"> • Open to students in the Philippines only</span>
                  <br />
                  
                </p>
              </div>
            </div>
          </div>

          {/* Additional Trust Elements */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <p className="text-gray-600">
              VABunny.com is committed to empowering Filipino talent through education and connecting skilled virtual assistants with global opportunities.
            </p>
            
          </div>
        </div>
      </main>
    </div>;
};

export default Scholarship;
