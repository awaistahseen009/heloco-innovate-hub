
import React from "react";
import { Award, CheckCircle, Medal, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Expertise = () => {
  const titleRef = useScrollAnimation({ direction: "up" });
  const metricsRef = useScrollAnimation({ direction: "left", delay: 100 });
  const achievementsRef = useScrollAnimation({ direction: "up", delay: 200 });
  const expertiseRef = useScrollAnimation({ direction: "right", delay: 300 });
  const ctaRef = useScrollAnimation({ direction: "up", delay: 400 });

  const metrics = [
    { value: "12", label: "Years of Operation" },
    { value: "500+", label: "Projects Completed" },
    { value: "300+", label: "Clients Served" },
    { value: "20+", label: "Industries Served" },
    { value: "95%", label: "On-Time Delivery" },
    { value: "90%", label: "Client Retention" },
    { value: "150+", label: "Team Size" },
    { value: "25+", label: "Countries" }
  ];

  const achievements = [
    "Awarded 'Best AI Solution Provider' by Tech Innovate Awards 2022",
    "Recognized as 'Top Web Development Firm' by Global IT Excellence 2021",
    "Certified Partner of Microsoft, AWS, Google Cloud, IBM Watson, and Salesforce",
    "Featured in Forbes Tech Review for Low-Code Innovation (2023)",
    "Won 'Mobile App of the Year' at Digital Excellence Awards 2020",
    "Named 'Fastest Growing Tech Firm' by Inc. 5000 (2019-2021)"
  ];

  const expertise = [
    "AI & Machine Learning",
    "Web & Mobile Development",
    "Low-Code/No-Code Solutions",
    "UI/UX Design",
    "DevOps & Cloud Services",
    "Data Analytics",
    "Cybersecurity",
    "IoT Solutions"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="expertise" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16" ref={titleRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-heloco-darkblue mb-4 font-poppins">
            Our Experience & Expertise
          </h2>
          <p className="text-gray-600 font-inter">
            With over a decade of experience, we've built a reputation for excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div ref={metricsRef} className="bg-white p-8 rounded-xl shadow-md border border-black transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-heloco-blue mr-3" />
              <h3 className="text-2xl font-semibold text-heloco-darkblue">Key Metrics</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <p className="text-2xl md:text-3xl font-bold text-heloco-blue mb-1">{metric.value}</p>
                  <p className="text-gray-600 text-sm">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div ref={achievementsRef} className="bg-white p-8 rounded-xl shadow-md border border-black transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-heloco-blue mr-3" />
              <h3 className="text-2xl font-semibold text-heloco-darkblue">Achievements</h3>
            </div>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex">
                  <CheckCircle className="w-5 h-5 text-heloco-blue mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div ref={expertiseRef} className="bg-white p-8 rounded-xl shadow-md border border-black transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <Medal className="w-8 h-8 text-heloco-blue mr-3" />
              <h3 className="text-2xl font-semibold text-heloco-darkblue">Core Expertise</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {expertise.map((item, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg text-center hover:bg-heloco-blue hover:text-white transition-colors">
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={ctaRef}>
          <div className="bg-gradient-to-r from-heloco-darkblue to-heloco-blue p-1 rounded-xl">
            <div className="bg-white p-8 rounded-lg text-center border border-black">
              <h3 className="text-2xl font-semibold text-heloco-darkblue mb-4">Ready to Work With Us?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join our 300+ satisfied clients who have transformed their businesses with our innovative solutions.
              </p>
              <button 
                className="bg-heloco-blue hover:bg-heloco-lightblue text-white font-medium px-6 py-3 rounded-lg transition-colors"
                onClick={() => scrollToSection("contact")}
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
