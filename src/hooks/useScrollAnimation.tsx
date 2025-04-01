
import { useEffect, useRef } from "react";

type AnimationDirection = "left" | "right" | "up" | "down" | "fade";

interface UseScrollAnimationProps {
  threshold?: number;
  direction?: AnimationDirection;
  delay?: number;
}

export const useScrollAnimation = ({
  threshold = 0.1,
  direction = "fade",
  delay = 0
}: UseScrollAnimationProps = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in");
            }, delay);
          }
        });
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      // Add initial animation classes - use separate add() calls for each class
      currentRef.classList.add("opacity-0");
      
      switch (direction) {
        case "left":
          currentRef.classList.add("-translate-x-10");
          currentRef.style.transition = "all 0.8s ease-out";
          break;
        case "right":
          currentRef.classList.add("translate-x-10");
          currentRef.style.transition = "all 0.8s ease-out";
          break;
        case "up":
          currentRef.classList.add("translate-y-10");
          currentRef.style.transition = "all 0.8s ease-out";
          break;
        case "down":
          currentRef.classList.add("-translate-y-10");
          currentRef.style.transition = "all 0.8s ease-out";
          break;
        case "fade":
        default:
          currentRef.style.transition = "opacity 0.8s ease-out";
          break;
      }
      
      // Create custom class for the "in" animation
      const style = document.createElement("style");
      style.innerHTML = `
        .animate-in {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
      `;
      document.head.appendChild(style);
      
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [direction, threshold, delay]);

  return ref;
};
