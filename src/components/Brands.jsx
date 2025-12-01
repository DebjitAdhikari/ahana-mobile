const Brands = () => {
  const brands = [
    { name: "Apple", img: "/images/apple.png" },
    { name: "Samsung", img: "/images/samsung.png" },
    { name: "OnePlus", img: "/images/oneplus.png" },
    { name: "Xiaomi", img: "/images/xiaomi.png" },
    { name: "Oppo", img: "/images/oppo.png" },
    { name: "Vivo", img: "/images/vivo.png" },
    { name: "Realme", img: "/images/realme.png" },
    // { name: "Google", img: "/images/vivo.png" },
    { name: "Motorola", img: "/images/motorola.png" },
    { name: "Nokia", img: "/images/nokia1.jpg" },
    { name: "Tecno", img: "/images/tecno.jpg" },
    { name: "Sony", img: "/images/sony.png" }
  ];

  return (
    <section id="brands" className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-left sm:text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
            Brands We Repair
          </h2>
          <p className="text-md sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Expert repair services for all major mobile brands with genuine parts
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col items-center justify-center"
            >
              <div className="w-20 mb-3">
                <img src={brand.img} alt="" />
              </div>
              <h3 className="font-semibold text-gray-800 text-center">{brand.name}</h3>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-left sm:text-center">
          <p className="text-md sm:text-lg text-gray-600 mb-6">
            Don't see your brand? We repair all major and minor brands!
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-sky-500 text-white px-2 sm:px-8 py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors"
          >
            Ask About Your Device
          </button>
        </div>
      </div>
    </section>
  );
};

export default Brands;
