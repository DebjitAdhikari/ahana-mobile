import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#F3F4F6] shadow-md z-50">
      <nav className="container mx-auto px-2 sm:px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <div className=" w-10 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center">
              <img src="./images/logo-simple.png" alt="" />
            </div>
            <div className="sm:text-2xl text-sm font-bold text-gray-800">
              <span className='text-sky-600'>Ahana </span>
              Mobile Servicing
              </div>
          </div>

          <div className="hidden text-lg font-semibold lg:flex py-2 space-x-8">

  {[
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Brands", id: "brands" },
    { label: "Gallery", id: "gallery" },
    { label: "Reviews", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ].map((item, index) => (
    <button
      key={index}
      onClick={() => scrollToSection(item.id)}
      className="
        relative group text-gray-700 
        transition-all duration-300 
        hover:text-sky-600
      "
    >
      {item.label}

      {/* Underline Animation */}
      <span
        className="
          absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-600 
          group-hover:w-full transition-all duration-300
        "
      ></span>
    </button>
  ))}

</div>


          

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-sky-600 hover:pl-2 transition-all py-2"
>Home</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-sky-600 hover:pl-2 transition-all py-2"
>Services</button>
            <button onClick={() => scrollToSection('brands')} className="block w-full text-left text-gray-700 hover:text-sky-600 hover:pl-2 transition-all py-2"
>Brands</button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left text-gray-700 hover:text-sky-600 hover:pl-2 transition-all py-2"
>Gallery</button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-700 hover:text-sky-600 hover:pl-2 transition-all py-2"
>Reviews</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-sky-600 hover:pl-2 transition-all py-2"
>Contact</button>
            <button onClick={() => scrollToSection('contact')} className="bg-[#1581BF] text-white px-6 py-2 rounded-lg hover:bg-sky-600 transition-colors w-full">
              Get Quote
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
