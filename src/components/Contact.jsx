import { MdLocationOn } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LuClock } from "react-icons/lu";

  // const handleSubmit = ((e) => {
  //   e.preventDefault();
  //   // alert('Thank you for contacting us! We will get back to you soon.');
  //   
  //   const formattedMessage = encodeURIComponent(
  //     `Hi, I'm contacting you from the Amar Mobile website.\n`
  //     +`Name: ${formData.name}\n`
  //     +`${formData.phone?`Contact No: ${formData.phone}\n`:""}`
  //     +`Message: ${formData.message}`
  //   )
  //   const whatsappLink = `https://wa.me/${myNumber}?text=${formattedMessage}`
  //   window.location.href=whatsappLink
  //   setFormData({ name: '', phone: '', message: '' });
    
  // })
  import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    device: '',
    message: ''
  });

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const myNumber=9332274472
     const formattedMessage = encodeURIComponent(
      `Hi, I'm contacting you from the Ahana Mobile Servicing website.\n`
      +`Name: ${formData.name}\n`
      +`${formData.phone?`Contact No: ${formData.phone}\n`:""}`
      +`${formData.device?`Device Model: ${formData.device}\n`:""}`
      +`Message: ${formData.message}`
    )
    const whatsappLink = `https://wa.me/${myNumber}?text=${formattedMessage}`
    window.location.href=whatsappLink
    setFormData({ name: '', phone: '', message: '', device:"" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-left sm:text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-md sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Send us a message and we'll respond as soon as possible
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-4 sm:p-8">
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Enter your name"
                />
              </div>

              {/* <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="john@example.com"
                />
              </div> */}

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number 
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Enter your contact no"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Device Model
                </label>
                <input
                  type="text"
                  name="device"
                  value={formData.device}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Enter the model name of your device"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Tell us about the issue..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-sky-500 transition-colors"
              >
                Send Message
              </button>

              
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg px-4 py-3 sm:p-8">
              <h3 className="sm:text-2xl text-xl font-bold text-gray-800 mb-6">Contact Information</h3>

              <div className="space-y-6">

  <div className="flex items-start space-x-2 sm:space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-[#0A84FF] text-2xl">
      <MdLocationOn />
    </div>
    <div>
      <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
      <p className="text-gray-600">
        Super Market, Satgachia<br />
        Purba Bardhaman, West Bengal 713422
      </p>
    </div>
  </div>

  <div className="flex items-start space-x-2 sm:space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-[#0A84FF] text-2xl">
      <FiPhoneCall />
    </div>
    <div>
      <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
      <p className="text-gray-600">+91 9332274472</p>
    </div>
  </div>

  <div className="flex items-start space-x-2 sm:space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-[#0A84FF] text-2xl">
      <HiOutlineMail />
    </div>
    <div>
      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
      <p className="text-gray-600">ahanamobile@gmail.com</p>
    </div>
  </div>

  <div className="flex items-start space-x-2 sm:space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-[#0A84FF] text-2xl">
      <LuClock />
    </div>
    <div>
      <h4 className="font-semibold text-gray-800 mb-1">Business Hours</h4>
      <p className="text-gray-600">
        Mon - Sat: 9:00 AM - 8:00 PM<br />
        Sunday: 10:00 AM - 6:00 PM
      </p>
    </div>
  </div>

</div>

            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d207.31286948240293!2d88.1421102743138!3d23.264516641983917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1764512548446!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


