
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ForWorkers from "./pages/ForWorkers";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Withdrawal from "./pages/Withdrawal";
import Products from "./pages/Products";
import Reviews from "./pages/Reviews";
import ReviewApproval from "./pages/ReviewApproval";
import Manager from "./pages/Manager";
import Admin from "./pages/Admin";
import Affiliate from "./pages/Affiliate";
import Earnings from "./pages/Earnings";
import Profile from "./pages/Profile";
import FreeGift from "./pages/FreeGift";
import Newsletter from "./pages/Newsletter";
import Scholarship from "./pages/Scholarship";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/for-workers" element={<ForWorkers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/review-approval" element={<ReviewApproval />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/dashboard/earnings" element={<Earnings />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/free-gift" element={<FreeGift />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
