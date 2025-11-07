import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const slides = [
  {
    title: "Welcome to UpStyle",
    description:
      "Transform your wardrobe into a sustainable fashion journey. Discover new ways to style and upcycle your clothes.",
    icon: "👗",
  },
  {
    title: "Build Your Digital Closet",
    description:
      "Upload your clothes, organize by season and color, and let AI help you create stunning outfit combinations.",
    icon: "📱",
  },
  {
    title: "Connect with Makers",
    description:
      "Find skilled makers who can help transform your old clothes into something new and exciting.",
    icon: "✨",
  },
];

export function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="h-full bg-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6 pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center max-w-md"
          >
            <div className="text-8xl mb-8">{slides[currentSlide].icon}</div>
            <h2 className="text-3xl mb-4">{slides[currentSlide].title}</h2>
            <p className="text-gray-600 leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="px-6 pb-8">
        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-[#5EACA0]"
                  : "w-2 bg-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <Button
            variant="ghost"
            onClick={handleSkip}
            className="flex-1 rounded-xl"
          >
            Skip
          </Button>
          <Button
            onClick={handleNext}
            className="flex-1 bg-[#5EACA0] hover:bg-[#4A9D94] text-white rounded-xl"
          >
            {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
