import { motion } from "framer-motion";

const Accessories = () => {
  const accessories = [
    {
      name: "Phone Cases",
      image: "/images/mobilecovers-img.png",
      description: "Protective & stylish cases",
      price: "₹80"
    },
    {
      name: "Screen Protectors",
      image: "/images/temperedglass-img.png",
      description: "Tempered glass protection",
      price: "₹50"
    },
    {
      name: "Chargers & Cables",
      image: "/images/datacable-img.png",
      description: "Fast charging accessories",
      price: "₹30"
    },
    {
      name: "Power Banks",
      image: "/images/powerbank-img.png",
      description: "Portable power solutions",
      price: "₹500"
    },
    {
      name: "Earphones",
      image: "/images/headphones-img.png",
      description: "Wireless & wired options",
      price: "₹250"
    },
    {
      name: "Bluetooth Speaker",
      image: "/images/bluetoothspeaker-img.png",
      description: "Car & desk mounts",
      price: "₹250"
    },
    {
      name: "Charging Adapter",
      image: "/images/chargingadapter-img.png",
      description: "Car & desk mounts",
      price: "₹50"
    },
  ];

  // Different animation variants for Accessories (more playful/retail style)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Slightly longer stagger than Services
        delayChildren: 0.2,
      }
    }
  };

  // Flip animation for cards (different from Services' spring animation)
  const cardVariants = {
    hidden: {
      opacity: 0,
      rotateX: -20,
      y: 40,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        mass: 0.8
      }
    }
  };

  // Scale and bounce animation for images
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  // Wave animation for header (different entrance)
  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -30,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.34, 1.56, 0.64, 1], // Custom easing for bouncy effect
      }
    }
  };

  // Price tag animation
  const priceVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  // Floating animation for cards on hover
  const floatAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header with different animation */}
        <motion.div 
          className="sm:text-center text-start mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-gray-900"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Mobile Accessories
          </motion.h2>
          <motion.p 
            className="text-md sm:text-xl text-gray-600 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Premium-quality accessories to enhance your mobile experience.
          </motion.p>
        </motion.div>

        {/* Products Grid with different animation pattern */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {accessories.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 
              shadow-md hover:shadow-xl transition-all 
              hover:-translate-y-2 cursor-pointer overflow-hidden group"
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                rotateY: 2,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }
              }}
              // Optional: Add floating animation on hover
              whileTap={{ scale: 0.98 }}
            >
              {/* Image with different animation */}
              <motion.div 
                className="relative h-48 w-full overflow-hidden"
                variants={imageVariants}
                whileHover="hover"
              >
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Content */}
              <div className="p-5">
                <motion.h3 
                  className="text-lg font-bold text-gray-900"
                  whileHover={{ color: "#0A84FF" }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.h3>

                <motion.p 
                  className="text-gray-600 mt-1 text-sm"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.description}
                </motion.p>

                {/* Price with special animation */}
                <motion.div 
                  className="mt-4 flex items-center justify-between"
                  initial="hidden"
                  animate="visible"
                  variants={priceVariants}
                >
                  <motion.span 
                    className="text-sky-600 font-semibold text-lg"
                    whileHover={{ 
                      scale: 1.1,
                      textShadow: "0px 0px 8px rgba(10, 132, 255, 0.3)"
                    }}
                  >
                    Starting from {item.price}
                  </motion.span>

                  {/* Optional animated button */}
                  <motion.button 
                    className="px-3 py-1 text-sm rounded-lg bg-[#0A84FF] text-white opacity-0 group-hover:opacity-100"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "#007AFF",
                      boxShadow: "0 4px 12px rgba(10, 132, 255, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ 
                      x: 0, 
                      opacity: 1,
                      transition: { 
                        delay: 0.1,
                        duration: 0.3 
                      }
                    }}
                  >
                    View
                  </motion.button>
                </motion.div>
              </div>

              {/* Decorative border animation on hover */}
              <motion.div 
                className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none"
                initial={false}
                whileHover={{
                  borderColor: "#0A84FF",
                  boxShadow: "inset 0 0 20px rgba(10, 132, 255, 0.1)"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Optional decorative animated elements */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.p 
            className="text-gray-700 text-lg font-medium"
            animate={{ 
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🔥 All accessories come with 30-day warranty
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Accessories;