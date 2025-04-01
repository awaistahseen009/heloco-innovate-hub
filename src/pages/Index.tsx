
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Expertise from "@/components/Expertise";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div id="root" className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Expertise />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
