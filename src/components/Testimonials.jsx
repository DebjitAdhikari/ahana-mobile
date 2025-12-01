import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Isha Singh",
      rating: 5,
      comment: "Amazing service! Everything was smooth, fast, and exactly what I needed.",
      device: "iPhone 13 Pro",
      img: "/images/customers/isa-singh.jpeg"
    },
    {
      name: "Tanmay Pal",
      rating: 5,
      comment: "Great experience overall. Super helpful and very professional.",
      device: "Samsung Galaxy S22",
      img: "/images/customers/tanmay-pal.jpeg"
    },
    {
      name: "Mou Sarkar",
      rating: 5,
      comment: "Loved the quality! Definitely coming back again.",
      device: "OnePlus 9",
      img: "/images/customers/mou-sarkar.jpeg"
    },
    {
      name: "Bapan Bhattacharjee",
      rating: 4,
      comment: "Quick response, friendly approach, and excellent results.",
      device: "Pixel 7",
      img: "/images/customers/bapan-bhat.jpeg"
    },
    // {
    //   name: "Debjit Adhikari",
    //   rating: 5,
    //   comment: "Reliable, efficient, and easy to work with. Highly recommended!",
    //   device: "iPhone 14",
    //   img: "/images/customers/debjit.jpg"
    // }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-sky-500 to-sky-700">
      <div className="container mx-auto px-2">

        <div className="text-left sm:text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Customer Reviews
          </h2>
          <p className="text-lg sm:text-xl text-sky-100 max-w-2xl mx-auto">
            See what our happy customers have to say about us
          </p>
        </div>

        <div className="max-w-4xl  mx-auto relative">

          {/* Slider Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-1 top-1/2 -translate-y-1/2 border-2 border-sky-600 bg-white/20 hover:bg-white/40 
            text-sky-600 p-3 rounded-full backdrop-blur-md transition-all"
          >
            <FiChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-1 top-1/2 -translate-y-1/2 border-2 border-sky-600 bg-white/20 hover:bg-white/40 
            text-sky-600 p-3 rounded-full backdrop-blur-md transition-all"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-12 min-h-[320px] flex flex-col justify-center">

            <div className="flex justify-center mb-6">
              <img
                src={testimonials[currentIndex].img}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full border-4 border-sky-500 object-cover shadow-lg"
              />
            </div>

            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-3xl">★</span>
              ))}
            </div>

            <p className="text-gray-700 px-2 text-lg md:text-xl text-center mb-6 leading-relaxed italic">
              "{testimonials[currentIndex].comment}"
            </p>

            <div className="text-center">
              <h4 className="font-bold text-gray-800 text-xl mb-1">
                {testimonials[currentIndex].name}
              </h4>
              {/* <p className="text-gray-600">{testimonials[currentIndex].device}</p> */}
            </div>

          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <div className="text-3xl sm:text-5xl font-bold mb-2">2K+</div>
            <div className="sm:text-lg text-sm text-sky-100">Repairs Completed</div>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-bold mb-2">98%</div>
            <div className="sm:text-lg text-sm text-sky-100">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-bold mb-2">4.7</div>
            <div className="sm:text-lg text-sm text-sky-100">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-bold mb-2">15+</div>
            <div className="sm:text-lg text-sm text-sky-100">Years Experience</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
