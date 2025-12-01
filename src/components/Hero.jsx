import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "./images/shop-img-1.png",
    "./images/shop-img-2.jpg",
    "./images/shop-img-3.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative sm:h-screen h-[90vh] w-full overflow-hidden bg-gray-50">

      {/* Image Slider */}
      <div className="absolute inset-0">
        {slides.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={img} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>  {/* <-- FIXED closing div */}

      {/* Content */}
      <div className="relative h-full flex items-center  px-4 sm:px-12 lg:px-24 text-white">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="text-3xl  sm:text-6xl font-bold leading-tight drop-shadow-2xl">
            <span className="text-sky-500">Ahana </span>  
            Moblie Servicing
          </h1>
          <p className="text-lg sm:text-2xl mt-4 text-gray-100 drop-shadow-md">
            A Mobile Point offers high-quality accessories, fast repair services, and unbeatable wholesale prices. Trusted by thousands for our expert work and premium products.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() =>
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
              }
              className="sm:px-8 px-2 py-3 sm:py-4 max-w-[150px] sm:max-w-[220px] rounded-xl sm:text-lg font-semibold bg-sky-600 hover:bg-teal-600 transition-all shadow-lg hover:scale-105"
            >
              Book Repair Now
            </button>

            <button
              onClick={() =>
                document.getElementById("services").scrollIntoView({ behavior: "smooth" })
              }
              className="sm:px-8 px-2 py-3 sm:py-4 max-w-[150px] sm:max-w-[220px] rounded-xl sm:text-lg font-semibold bg-white text-sky-600 border-sky-600 border-2 hover:bg-gray-200 transition-all shadow-lg hover:scale-105"
            >
              Our Services
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 hidden sm:grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="sm:text-4xl text-2xl font-bold text-white">10K+</div>
              <div className="sm:text-lg text-sm text-gray-100 mt-1">Repairs Done</div>
            </div>

            <div className="text-center">
              <div className="sm:text-4xl text-2xl font-bold text-white">500+</div>
              <div className="sm:text-lg text-sm text-gray-100 mt-1">Happy Clients</div>
            </div>

            <div className="text-center">
              <div className="sm:text-4xl text-2xl font-bold text-white">5★</div>
              <div className="sm:text-lg text-sm text-gray-100 mt-1">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-gray-300 w-8" : "bg-white/40 w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
