
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Code, PenTool, Smartphone, Globe, ChevronRight, PieChart } from "lucide-react";

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  color 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  color: string;
}) => (
  <Card className="border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full bg-white">
    <CardHeader className="pb-2">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <CardTitle className="text-xl font-semibold text-heloco-darkblue">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-600 mb-4">
        {description}
      </CardDescription>
      <Button variant="link" className="text-heloco-blue hover:text-heloco-lightblue p-0 h-auto font-medium">
        Learn More <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </CardContent>
  </Card>
);

const Services = () => {
  const services = [
    {
      title: "Artificial Intelligence (AI)",
      description: "Advanced AI solutions to transform business operations with predictive analytics, NLP, computer vision, and intelligent automation.",
      icon: Brain,
      color: "bg-heloco-blue"
    },
    {
      title: "Machine Learning (ML)",
      description: "Custom ML models designed for real-world challenges, from fraud detection and demand forecasting to predictive maintenance.",
      icon: PieChart,
      color: "bg-heloco-lightblue"
    },
    {
      title: "Low-Code/No-Code Solutions",
      description: "Accelerate development without sacrificing quality. Create applications 10x faster with drag-and-drop interfaces and pre-built templates.",
      icon: Code,
      color: "bg-heloco-gray"
    },
    {
      title: "Web Design",
      description: "Visually stunning, user-friendly websites optimized for all devices, focusing on intuitive navigation and modern aesthetics.",
      icon: PenTool,
      color: "bg-heloco-blue"
    },
    {
      title: "Web Development",
      description: "Robust, secure, and scalable websites built with modern frameworks like React, Angular, and Node.js, tailored to your unique needs.",
      icon: Globe,
      color: "bg-heloco-lightblue"
    },
    {
      title: "Mobile Apps",
      description: "High-performance native and cross-platform applications for iOS and Android using Swift, Kotlin, Flutter, and React Native.",
      icon: Smartphone,
      color: "bg-heloco-gray"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heloco-darkblue mb-4 font-poppins">
            Our Services
          </h2>
          <p className="text-gray-600 font-inter">
            We provide comprehensive technology solutions designed to transform your business and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-heloco-blue hover:bg-heloco-lightblue text-white transition-colors">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
