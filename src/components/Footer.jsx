import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-14 pb-8">
      <div className="container mx-auto px-4">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* LOGO + TEXT */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white rounded-lg">

              <img
                src="/images/logo.png"
                alt="Ahana Logo"
                className="w-20 h-20 object-contain rounded-xl"
              />
              </div>

              <span className="text-2xl font-semibold leading-tight">
                Ahana Mobile <br /> Servicing
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for mobile repair and accessories.
              Quality service since 2013.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:mx-auto">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document.getElementById("home").scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-sky-400 transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById("services").scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-sky-400 transition"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById("brands").scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-sky-400 transition"
                >
                  Brands
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-sky-400 transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="lg:mx-auto">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-3 rounded-lg bg-gray-800 hover:bg-sky-600 transition"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg bg-gray-800 hover:bg-sky-600 transition"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg bg-gray-800 hover:bg-sky-600 transition"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-gray-400 text-sm">

          <p>© {currentYear} Ahana Mobile Servicing. All Rights Reserved.</p>

          <p className="mt-2 md:mt-0">
            Developed by <span className="text-sky-400 font-medium">Debjit Adhikari</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
