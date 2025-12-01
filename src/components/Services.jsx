import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdPhoneIphone, MdStorefront, MdWaterDamage } from "react-icons/md";
import { RiBattery2ChargeLine } from "react-icons/ri";
import { BsSoundwave } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";
import { RiFlashlightLine } from "react-icons/ri";
import { HiOutlineDatabase } from "react-icons/hi";
import { CgSoftwareDownload } from "react-icons/cg";
import { BsShieldCheck } from "react-icons/bs";
import { TbBolt } from "react-icons/tb";
import { MdHighQuality } from "react-icons/md";

const Services = () => {
  
  const services = [
    {
      icon: <MdPhoneIphone />,
      title: "Screen Replacement",
      description: "Cracked or broken screen? We replace it with original quality parts in minutes.",
      price: "Starting at ₹1000"
    },
    {
      icon: <RiBattery2ChargeLine />,
      title: "Battery Replacement",
      description: "Fast draining battery? Get it replaced with high-capacity batteries.",
      price: "Starting at ₹250"
    },
    {
      icon: <MdWaterDamage />,
      title: "Water Damage Repair",
      description: "Dropped your phone in water? We can help recover and repair it.",
      price: "Starting at ₹150"
    },
    {
      icon: <BsSoundwave />,
      title: "Audio Issues",
      description: "Speaker or microphone problems? We fix all audio-related issues.",
      price: "Starting at ₹100"
    },
    {
      icon: <FiCamera />,
      title: "Camera Repair",
      description: "Blurry or broken camera? We restore your camera to perfect condition.",
      price: "Starting at ₹400"
    },
    {
      icon: <RiFlashlightLine />,
      title: "Charging Port Fix",
      description: "Not charging properly? We repair or replace charging ports.",
      price: "Starting at ₹50"
    },
    {
      icon: <CgSoftwareDownload />,
      title: "Software Issues",
      description: "Software glitches, updates, or virus removal — we handle it all.",
      price: "Starting at ₹150"
    },
    {
  icon: <MdStorefront />,
  title: "Wholesale Accessories",
  description: "Get mobile accessories, chargers, covers, and gadgets at wholesale prices.",
  price: "Best market rates"
}

  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each child animation
        delayChildren: 0.3, // Initial delay before animations start
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.5
      }
    }
  };

  const warrantyVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-12 sm:py-24 bg-white relative">
      {/* Section Header */}
      <div className="absolute right-0 top-2 w-24 sm:w-48">
        <img src="/images/bg-line.png" className="w-full" alt="" />
      </div>
      
      <motion.div 
        className="sm:text-center px-4 text-left mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headerVariants}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 ">
          Our Services
        </h2>
        <p className="text-md sm:text-xl text-gray-600 max-w-2xl mx-auto mt-4 ">
          Premium, fast, and reliable mobile repair solutions using high‑quality parts.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        className="relative container mx-auto sm:px-8 px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="absolute left-1 sm:-left-2 -bottom-12 w-14 sm:w-40">
          <img src="/images/bg-line-bl.png" className="w-full" alt="" />
        </div>
        
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="cursor-pointer bg-white/40 backdrop-blur-2xl 
            border border-gray-200/60 p-8 rounded-2xl shadow-md 
            transition-all duration-300 hover:shadow-xl 
            hover:-translate-y-2 group"
            variants={cardVariants}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="text-5xl text-sky-600 mb-4 transform group-hover:scale-110 transition-all"
              whileHover={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            >
              {service.icon}
            </motion.div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              {service.title}
            </h3>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {service.description}
            </p>

            <div className="text-sky-600 sm:font-semibold text-lg">
              {service.price}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Warranty Highlight Section */}
      <motion.div 
        className="mt-20 mx-3 sm:mx-6 md:mx-auto max-w-6xl 
        bg-white border border-gray-200 sm:rounded-3xl rounded-lg sm:p-12 px-2 py-4 shadow-md"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={warrantyVariants}
      >
        <h3 className="sm:text-3xl text-xl font-bold mb-10 text-center text-sky-600">
          All Repairs Come With
        </h3>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* CARD 1 */}
          <motion.div 
            className="bg-white border border-gray-200 rounded-2xl p-8 text-center
            hover:border-sky-600 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="text-5xl mb-4 text-sky-600"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <BsShieldCheck className="mx-auto" />
            </motion.div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              No-Fix, No-Fees
            </h4>
            <p className="text-gray-600">
              If we can’t repair it, you don’t pay anything
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div 
            className="bg-white border border-gray-200 rounded-2xl p-8 text-center
            hover:border-sky-600 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="text-5xl mb-4 text-sky-600"
              whileHover={{ scale: 1.2 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 10
              }}
            >
              <TbBolt className="mx-auto"/>
            </motion.div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Same Day Service
            </h4>
            <p className="text-gray-600">
              Most repairs finished within 30 minutes
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div 
            className="bg-white border border-gray-200 rounded-2xl p-8 text-center
            hover:border-sky-600 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="text-5xl mb-4 text-sky-600"
              whileHover={{ y: -5 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 15
              }}
            >
              <MdHighQuality className="mx-auto"/>
            </motion.div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Quality Parts
            </h4>
            <p className="text-gray-600">
              Premium & genuine replacements
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;