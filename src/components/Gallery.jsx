import { useState } from 'react';
import { FaPlay } from "react-icons/fa";

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { url: "/videos/shop-video-1.mp4", type: "video" },
    { url: "/images/shop-img-2.jpg", type: "image" },
    { url: "/images/shop-img-1.png", type: "image" },
    { url: "/images/shop-img-4.jpg", type: "image" },
    { url: "/images/shop-img-3.jpg", type: "image" },
    { url: "/images/shop-img-5.jpg", type: "image" },
    { url: "/images/shop-img-6.jpg", type: "image" },
    { url: "/images/shop-img-7.jpg", type: "image" },
    { url: "/images/shop-img-8.jpg", type: "image" },
    { url: "/images/shop-img-9.jpg", type: "image" },
    { url: "/images/shop-img-10.jpg", type: "image" },
    { url: "/images/shop-img-11.jpg", type: "image" },
    { url: "/images/shop-img-12.jpg", type: "image" },

    // ⭐ ADD YOUR VIDEO FILES LIKE THIS
  ];

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-left sm:text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Work Gallery
          </h2>
          <p className="sm:text-xl text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our professional workspace and repair process
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              onClick={() => setSelectedItem(item)}
            >
              {/* Thumbnail */}
              {item.type === "image" ? (
                <img
                  src={item.url}
                  alt=""
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <video
                  src={item.url}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                  muted
                />
              )}

              {/* Hover Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Play Icon for Videos */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 p-3 rounded-full shadow-lg opacity-80 group-hover:opacity-100 transition">
                    <FaPlay className="text-black text-xl" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300"
            >
              ×
            </button>

            {/* Render Image OR Video */}
            {selectedItem.type === "image" ? (
              <img
                src={selectedItem.url}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            ) : (
              <video
                src={selectedItem.url}
                controls
                autoPlay
                className="max-w-full max-h-[90vh] rounded-lg"
              ></video>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
