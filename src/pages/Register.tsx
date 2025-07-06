import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Rabbit, Eye, EyeOff, Mail, Lock, User, ArrowLeft, Briefcase, UserCheck } from "lucide-react";
import Header from "@/components/Header";
import LogoIcon from "@/components/LogoIcon";
import TermsOfService from "@/components/TermsOfService";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import { useToast } from "@/hooks/use-toast";
const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "",
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.accountType) {
      toast({
        title: "Account type required",
        description: "Please select whether you're an Employer or Worker.",
        variant: "destructive"
      });
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive"
      });
      return;
    }
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms required",
        description: "Please agree to the terms and conditions to continue.",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);

    // Simulate registration process
    setTimeout(() => {
      const accountTypeText = formData.accountType === 'employer' ? 'Employer' : 'Worker';
      toast({
        title: "Welcome to VaBunny! 🎉",
        description: `Your ${accountTypeText} account has been created successfully. ${formData.accountType === 'employer' ? 'Start finding amazing virtual assistants' : 'Start finding amazing job opportunities'} today!`
      });
      setIsLoading(false);
    }, 2000);
  };
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex items-center justify-center p-4 pt-24">
        <div className="w-full max-w-md">
          {/* Logo Section */}
          <div className="text-center mb-8">
            
          </div>

          {/* Back to Homepage Link */}
          <div className="mb-6">
            
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-purple-100 p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Join VaBunny</h1>
              <p className="text-gray-600">Create your account to start hiring talent as an employer or find a job as a worker.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Account Type Selection */}
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-3 block">
                  Select Account Type
                </Label>
                <RadioGroup value={formData.accountType} onValueChange={value => handleInputChange("accountType", value)} className="grid grid-cols-1 gap-3">
                  <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <RadioGroupItem value="employer" id="employer" />
                    <div className="flex items-center space-x-3 flex-1">
                      <Briefcase className="w-5 h-5 text-purple-500" />
                      <div>
                        <Label htmlFor="employer" className="font-medium text-gray-900 cursor-pointer">
                          Employer
                        </Label>
                        <p className="text-sm text-gray-600">Hire Workers</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <RadioGroupItem value="worker" id="worker" />
                    <div className="flex items-center space-x-3 flex-1">
                      <UserCheck className="w-5 h-5 text-purple-500" />
                      <div>
                        <Label htmlFor="worker" className="font-medium text-gray-900 cursor-pointer">
                          Worker
                        </Label>
                        <p className="text-sm text-gray-600">Find a Job</p>
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First Name
                  </Label>
                  <div className="relative mt-1">
                    <Input id="firstName" type="text" value={formData.firstName} onChange={e => handleInputChange("firstName", e.target.value)} placeholder="John" className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500" required />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last Name
                  </Label>
                  <div className="relative mt-1">
                    <Input id="lastName" type="text" value={formData.lastName} onChange={e => handleInputChange("lastName", e.target.value)} placeholder="Doe" className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500" required />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </Label>
                <div className="relative mt-1">
                  <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange("email", e.target.value)} placeholder="your@email.com" className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500" required />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <div className="relative mt-1">
                  <Input id="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={e => handleInputChange("password", e.target.value)} placeholder="Create a strong password" className="pl-10 pr-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500" required />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                  Confirm Password
                </Label>
                <div className="relative mt-1">
                  <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} value={formData.confirmPassword} onChange={e => handleInputChange("confirmPassword", e.target.value)} placeholder="Confirm your password" className="pl-10 pr-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500" required />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-start">
                <input id="agree-terms" name="agree-terms" type="checkbox" checked={formData.agreeToTerms} onChange={e => handleInputChange("agreeToTerms", e.target.checked)} className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded mt-0.5" required />
                <label htmlFor="agree-terms" className="ml-3 block text-sm text-gray-700">
                  I agree to the{" "}
                  <TermsOfService>
                    <button type="button" className="font-medium text-purple-600 hover:text-purple-500 underline">
                      Terms of Service
                    </button>
                  </TermsOfService>
                  {" "}and{" "}
                  <PrivacyPolicy>
                    <button type="button" className="font-medium text-purple-600 hover:text-purple-500 underline">
                      Privacy Policy
                    </button>
                  </PrivacyPolicy>
                </label>
              </div>

              <Button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-3">
                {isLoading ? <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Creating your account...</span>
                  </div> : <div className="flex items-center space-x-2">
                    <Rabbit className="w-4 h-4" />
                    <span>Create Account</span>
                  </div>}
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  
                </div>
                
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link to="/login" className="font-medium text-purple-600 hover:text-purple-500">
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>;
};
export default Register;