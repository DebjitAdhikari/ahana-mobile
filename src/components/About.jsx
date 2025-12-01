import { MdWorkspacePremium } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { TbCurrencyDollar, TbCurrencyRupee } from "react-icons/tb";

const About = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/shop-img-4.jpg"
              alt="About Us"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At A Mobile Point, we’ve been repairing smartphones, selling accessories, and helping customers make the right tech choices for over 15 years. Our mission is simple — to provide fast, reliable, and affordable mobile services.

From quick screen replacements to advanced chip-level repairs, our experienced technicians ensure your device receives the best care. Along with repairs, we offer a wide range of mobile accessories and also provide wholesale supply for shops, resellers, and bulk buyers at competitive prices.

Your device and your trust matter to us — experience service that’s honest, skilled, and dependable.</p>

            <div className="space-y-4 mb-8">

  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600` text-2xl">
      <MdWorkspacePremium className="text-sky-600"/>
    </div>
    <div>
      <h3 className="font-semibold text-gray-800 text-lg mb-1">Certified Experts</h3>
      <p className="text-gray-600">Trained and certified technicians with years of experience</p>
    </div>
  </div>

  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center ` text-2xl">
      <BsLightningCharge className="text-sky-600" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-800 text-lg mb-1">Quick Turnaround</h3>
      <p className="text-gray-600">Most repairs completed within 30 minutes to same day</p>
    </div>
  </div>

  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600` text-2xl">
      <HiOutlineBadgeCheck className="text-sky-600" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-800 text-lg mb-1">Quality Guaranteed</h3>
      <p className="text-gray-600">We deliver top-quality repairs using only genuine parts</p>
    </div>
  </div>

  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600` text-2xl">
      <TbCurrencyRupee className="text-sky-600" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-800 text-lg mb-1">Affordable Prices</h3>
      <p className="text-gray-600">Competitive pricing without compromising on quality</p>
    </div>
  </div>

</div>


            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-sky-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
