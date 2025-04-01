
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-20">
          <div className="mb-8">
            <div className="inline-block text-9xl font-bold bg-gradient-to-r from-heloco-darkblue to-heloco-blue text-transparent bg-clip-text">
              404
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-heloco-darkblue mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button className="bg-heloco-blue hover:bg-heloco-lightblue text-white transition-colors">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
