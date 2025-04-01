
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", path: "#", onClick: () => scrollToSection("root") },
    { name: "Services", path: "#services", onClick: () => scrollToSection("services") },
    { name: "Projects", path: "#projects", onClick: () => scrollToSection("projects") },
    { name: "Expertise", path: "#expertise", onClick: () => scrollToSection("expertise") },
    { name: "Testimonials", path: "#testimonials", onClick: () => scrollToSection("testimonials") },
    { name: "Contact Us", path: "#contact", onClick: () => scrollToSection("contact") },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-heloco-darkblue bg-opacity-95 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-white font-poppins font-bold text-2xl">
            Heloco
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-white hover:text-heloco-lightblue font-inter text-sm font-medium transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                link.onClick();
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button 
            className="bg-heloco-blue hover:bg-heloco-lightblue transition-colors duration-300 text-white"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white p-2 focus:outline-none"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-heloco-darkblue bg-opacity-95 z-40">
          <div className="flex flex-col items-center pt-10 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-white hover:text-heloco-lightblue font-inter text-lg font-medium transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  link.onClick();
                }}
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="bg-heloco-blue hover:bg-heloco-lightblue transition-colors duration-300 text-white mt-4"
              onClick={() => {
                scrollToSection("contact");
                setIsMenuOpen(false);
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
