import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({lang}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang=="bn"?"হোম":'Home', href: '#home' },
    { name: lang=="bn"?"সার্ভিস":'Services', href: '#services' },
    { name: lang=="bn"?"অ্যাক্সেসরিজ":'Accessories', href: '#accessories' },
    { name: lang=="bn"?"সম্বন্ধে":'About', href: '#about' },
    { name: lang=="bn"?"যোগাযোগ":'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-md ${
        isScrolled
          ? 'bg-midDark/80 shadow-md  '
          : 'bg-midDark/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="./images/amar-logo.png"
              className="w-12 h-16 object-contain"
              alt="Logo"
            />
            <span className="text-2xl md:text-3xl text-white font-bold tracking-tight">
              Amar<span className=" text-primary">Mobile</span>
            </span>
          </div>

          
          {/* Desktop Links */}
<div className="hidden md:flex items-center space-x-6">
  {navLinks.map((link) => (
    <button
      key={link.name}
      onClick={() => scrollToSection(link.href)}
      className={`relative text-white ${
        lang === "bn" ? "font-bengali " : "font-medium"
      } transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r from-yellow-500 to-yellow-700 hover:after:w-full after:transition-all after:duration-300`}
    >
      {link.name}
    </button>
  ))}
</div>

{/* Mobile Menu Button - No font weight class to modify, keeping as is */}
<button
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden text-primary hover:text-primary rounded-lg transition-colors"
>
  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
</button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
  className={`md:hidden overflow-hidden py-2 transition-all duration-500 ease-in-out ${
    isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
  }`}
>
  <div className="flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md py-3 px-5 space-y-3 mt-2 border-gray-100">
    {navLinks.map((link) => (
      <button
        key={link.name}
        onClick={() => scrollToSection(link.href)}
        className={`text-white text-left ${
          lang === 'bn' ? 'font-bengali ' : 'font-medium'
        } py-2 hover:text-primary transition-all duration-300 border-b border-gray-100 last:border-none`}
      >
        {link.name}
      </button>
    ))}
  </div>
</div>
      </div>
    </nav>
  );
};

export default Navbar;
