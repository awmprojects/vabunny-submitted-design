import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Newsletter = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Set cookie to prevent popup from showing again
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1); // Cookie expires in 1 year
    document.cookie = `newsletter_subscribed=true; expires=${expiryDate.toUTCString()}; path=/`;

    // Get email from query params if available
    const email = searchParams.get('email');
    
    // Redirect to register page with email if provided
    const params = new URLSearchParams();
    if (email) {
      params.set('email', email);
    }
    
    const registerUrl = email ? `/register?${params.toString()}` : '/register';
    navigate(registerUrl, { replace: true });
  }, [navigate, searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
};

export default Newsletter;