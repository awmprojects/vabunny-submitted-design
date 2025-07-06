
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate password reset process
    setTimeout(() => {
      setIsEmailSent(true);
      toast({
        title: "Reset email sent!",
        description: "Check your email for password reset instructions."
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex items-center justify-center p-4 pt-24">
        <div className="w-full max-w-md">
          {/* Back to Login Link */}
          <div className="mb-6">
            <Link 
              to="/login" 
              className="inline-flex items-center text-sm text-purple-600 hover:text-purple-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Login
            </Link>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-purple-100 p-8">
            {!isEmailSent ? (
              <>
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">Forgot Password?</h1>
                  <p className="text-gray-600">Enter your email address and we'll send you a link to reset your password</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </Label>
                    <div className="relative mt-1">
                      <Input 
                        id="email" 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="your@email.com" 
                        className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500" 
                        required 
                      />
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoading} 
                    className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-3"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending reset email...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>Send Reset Email</span>
                      </div>
                    )}
                  </Button>

                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Remember your password?{" "}
                      <Link to="/login" className="font-medium text-purple-600 hover:text-purple-500">
                        Sign in here
                      </Link>
                    </p>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Email Sent!</h1>
                <p className="text-gray-600 mb-6">
                  We've sent a password reset link to <strong>{email}</strong>. 
                  Please check your email and follow the instructions to reset your password.
                </p>
                <div className="space-y-4">
                  <p className="text-sm text-gray-500">
                    Didn't receive the email? Check your spam folder or try again.
                  </p>
                  <Button 
                    onClick={() => {
                      setIsEmailSent(false);
                      setEmail("");
                    }}
                    variant="outline" 
                    className="w-full border-purple-200 text-purple-600 hover:bg-purple-50"
                  >
                    Try Different Email
                  </Button>
                  <div className="text-center">
                    <Link to="/login" className="text-sm font-medium text-purple-600 hover:text-purple-500">
                      Back to Login
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
