
import React from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      content: "Heloco transformed our business with their AI-powered analytics platform. We saw a 30% increase in operational efficiency within three months. Their team was professional, responsive, and truly understood our needs.",
      author: "Sarah Johnson",
      position: "COO",
      company: "MediHealth Solutions"
    },
    {
      content: "The low-code platform Heloco built for us cut our development time in half. It's user-friendly and has empowered our team to innovate without relying on external developers. We've launched 10 new workflows in just 6 months.",
      author: "Mark Davis",
      position: "IT Director",
      company: "RetailPro Inc."
    },
    {
      content: "We hired Heloco for a custom mobile app, and the results were phenomenal. The app's design is sleek, and it performs flawlessly across 50+ device types. They delivered ahead of schedule and exceeded our expectations.",
      author: "Emily Chen",
      position: "Founder",
      company: "FitLife App"
    },
    {
      content: "Their web development team revamped our e-commerce site, boosting our conversion rate by 25%. Heloco's attention to detail and technical expertise are unmatched. Our site now handles 20,000 daily visitors without a hitch.",
      author: "James Carter",
      position: "CEO",
      company: "ShopSphere"
    },
    {
      content: "Heloco's ML solution helped us detect fraudulent transactions in real-time, saving us millions. They're a reliable partner we'll work with again. The system caught 99% of fraud cases in its first month.",
      author: "Priya Patel",
      position: "CFO",
      company: "FinanceGuard"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-heloco-darkblue to-heloco-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            What Our Clients Say
          </h2>
          <p className="text-gray-200 font-inter">
            Don't just take our word for it. Hear from the businesses we've helped transform.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="bg-white/10 backdrop-blur-md border-0 h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <Quote className="w-10 h-10 text-heloco-lightblue mb-4" />
                      <p className="text-gray-100 mb-6 flex-1">"{testimonial.content}"</p>
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                        <p className="text-gray-300">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="mx-2 bg-white/20 hover:bg-white/30 border-0 text-white" />
              <CarouselNext className="mx-2 bg-white/20 hover:bg-white/30 border-0 text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
