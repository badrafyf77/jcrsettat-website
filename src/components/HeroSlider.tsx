import { useState, useEffect } from "react";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/uploads/home/jcr1.jpeg",
    },
    {
      image: "/uploads/home/jcr2.jpeg",
    },
    {
      image: "/uploads/home/jcr3.jpeg",
    },
    {
      image: "/uploads/home/jcr4.jpeg",
    },
    {
      image: "/uploads/home/jcr5.jpeg",
    },
    {
      image: "/uploads/home/jcr6.jpeg",
    },
    {
      image: "/uploads/home/jcr7.jpeg",
    },
    {
      image: "/uploads/home/jcr8.jpeg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 1 second as requested

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
      ))}

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="text-white px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          جمعية الشباب المواطن
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl">
          نبني معاً مستقبلاً أفضل لمجتمعنا
          </p>
          <button className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            اكتشف أنشطتنا
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
