
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Project {
  title: string;
  client: string;
  description: string;
  technologies: string[];
  duration: string;
  impact: string;
  category: string;
}

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const titleRef = useScrollAnimation({ direction: "up" });
  
  // Create fixed number of refs for project animations
  const projectRef1 = useScrollAnimation({ direction: "left", delay: 100 });
  const projectRef2 = useScrollAnimation({ direction: "right", delay: 200 });
  const projectRef3 = useScrollAnimation({ direction: "left", delay: 300 });
  const projectRef4 = useScrollAnimation({ direction: "right", delay: 400 });
  const projectRef5 = useScrollAnimation({ direction: "left", delay: 500 });
  const projectRef6 = useScrollAnimation({ direction: "right", delay: 600 });
  
  // Array of refs to access them by index
  const projectRefs = [projectRef1, projectRef2, projectRef3, projectRef4, projectRef5, projectRef6];

  const projects: Project[] = [
    {
      title: "AI-Powered Healthcare Analytics",
      client: "MediHealth Solutions",
      description: "An AI-driven platform to analyze patient data and predict health risks, integrated with electronic health records across 50 hospitals.",
      technologies: ["Python", "TensorFlow", "AWS", "NLP"],
      duration: "6 months",
      impact: "Saved $2M annually, improved patient satisfaction by 25%",
      category: "ai"
    },
    {
      title: "E-Commerce Website Overhaul",
      client: "ShopSphere",
      description: "Redesigned a high-traffic e-commerce site with 100,000+ SKUs, custom CMS, and payment gateway integrations.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      duration: "4 months",
      impact: "Boosted revenue by $1.5M in the first year",
      category: "web"
    },
    {
      title: "Low-Code Workflow Automation",
      client: "RetailPro Inc.",
      description: "Built a low-code platform to automate inventory, supply chain, and HR processes for 200+ stores.",
      technologies: ["OutSystems", "REST APIs", "SQL Server", "Power BI"],
      duration: "3 months",
      impact: "Cut operational delays by 50%, saved 10,000+ staff hours annually",
      category: "low-code"
    },
    {
      title: "Mobile Fitness App",
      client: "FitLife App",
      description: "Created a cross-platform mobile app with workout tracking, meal planning, and social features. Integrated with wearables.",
      technologies: ["Flutter", "Firebase", "Google Fit API", "AWS Amplify"],
      duration: "5 months",
      impact: "Grew user base by 200%, increased daily active users to 50,000",
      category: "mobile"
    },
    {
      title: "ML Fraud Detection System",
      client: "FinanceGuard",
      description: "Implemented a machine learning model to identify suspicious transactions across 10M+ monthly records.",
      technologies: ["PyTorch", "Kafka", "PostgreSQL", "Elasticsearch"],
      duration: "7 months",
      impact: "Prevented $3M in losses, improved compliance by 30%",
      category: "ml"
    },
    {
      title: "Web Portal for Education",
      client: "EduLearn",
      description: "Developed a responsive web portal for 50,000+ students, with course management, live classes, and payment features.",
      technologies: ["Angular", "Django", "PostgreSQL", "Zoom API"],
      duration: "5 months",
      impact: "Boosted revenue by $1M, reduced admin workload by 40%",
      category: "web"
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16" ref={titleRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-heloco-darkblue mb-4 font-poppins">
            Our Recent Projects
          </h2>
          <p className="text-gray-600 font-inter">
            Discover how we've helped businesses transform their operations and achieve remarkable results.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-10">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2 -mx-4 px-4">
            <TabsList className="bg-gray-100">
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveTab("all")}
                className="data-[state=active]:bg-heloco-blue data-[state=active]:text-white"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger 
                value="ai" 
                onClick={() => setActiveTab("ai")}
                className="data-[state=active]:bg-heloco-blue data-[state=active]:text-white"
              >
                AI
              </TabsTrigger>
              <TabsTrigger 
                value="ml" 
                onClick={() => setActiveTab("ml")}
                className="data-[state=active]:bg-heloco-blue data-[state=active]:text-white"
              >
                ML
              </TabsTrigger>
              <TabsTrigger 
                value="web" 
                onClick={() => setActiveTab("web")}
                className="data-[state=active]:bg-heloco-blue data-[state=active]:text-white"
              >
                Web
              </TabsTrigger>
              <TabsTrigger 
                value="mobile" 
                onClick={() => setActiveTab("mobile")}
                className="data-[state=active]:bg-heloco-blue data-[state=active]:text-white"
              >
                Mobile
              </TabsTrigger>
              <TabsTrigger 
                value="low-code" 
                onClick={() => setActiveTab("low-code")}
                className="data-[state=active]:bg-heloco-blue data-[state=active]:text-white"
              >
                Low-Code
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => {
                // Use the ref at the corresponding index, or the first one if index is out of bounds
                const ref = index < projectRefs.length ? projectRefs[index] : projectRefs[0];
                
                return (
                  <div key={index} ref={ref}>
                    <div className="bg-white border border-black rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="bg-gradient-to-r from-heloco-darkblue to-heloco-blue p-6 text-white">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm opacity-80">Client: {project.client}</p>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Duration: {project.duration}</span>
                          <span className="font-medium text-heloco-blue">Impact: {project.impact}</span>
                        </div>
                        <Button variant="link" className="text-heloco-blue hover:text-heloco-lightblue p-0 mt-4 h-auto font-medium">
                          View Case Study <ExternalLink className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-10 text-center">
          <Button 
            className="bg-heloco-blue hover:bg-heloco-lightblue text-white transition-colors"
            onClick={() => scrollToSection("projects")}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
