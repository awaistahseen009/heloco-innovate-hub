
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-heloco-darkblue pt-20 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(#4682B4_1px,transparent_1px),linear-gradient(90deg,#4682B4_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-poppins leading-tight">
              Innovating the Future of Technology
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-inter leading-relaxed">
              Empowering Businesses with Cutting-Edge Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-heloco-blue hover:bg-heloco-lightblue text-white text-base px-6 py-6 transition-all duration-300 transform hover:scale-105">
                Explore Services
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white px-6 py-6">
                Our Projects
              </Button>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-heloco-blue rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-10 -left-10 w-64 h-64 bg-heloco-lightblue rounded-full filter blur-3xl opacity-20"></div>
            <div className="relative z-10 bg-gradient-to-br from-heloco-blue to-heloco-lightblue p-1 rounded-xl">
              <div className="bg-heloco-darkblue rounded-lg p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-heloco-blue/20 rounded-lg p-4 text-center">
                    <h3 className="text-3xl font-bold text-white">500+</h3>
                    <p className="text-gray-300">Projects Completed</p>
                  </div>
                  <div className="bg-heloco-blue/20 rounded-lg p-4 text-center">
                    <h3 className="text-3xl font-bold text-white">300+</h3>
                    <p className="text-gray-300">Clients Served</p>
                  </div>
                  <div className="bg-heloco-blue/20 rounded-lg p-4 text-center">
                    <h3 className="text-3xl font-bold text-white">25+</h3>
                    <p className="text-gray-300">Countries</p>
                  </div>
                  <div className="bg-heloco-blue/20 rounded-lg p-4 text-center">
                    <h3 className="text-3xl font-bold text-white">12</h3>
                    <p className="text-gray-300">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
