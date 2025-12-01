import { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does a typical repair take?",
      answer: "Most common repairs like screen replacement or battery change take 30-60 minutes. More complex repairs may take a few hours to a day. We always provide an estimated timeframe upfront."
    },
    {
      question: "Do you offer warranty on repairs?",
      answer: "All products come with the original company warranty. We provide warranty only on items that include manufacturer coverage. Please note: we do not offer additional warranty on repair services." },
    {
      question: "Are the replacement parts original?",
      answer: "We use a combination of genuine OEM parts and high-quality aftermarket parts depending on availability and your budget. We always inform you before proceeding with the repair."
    },
    {
      question: "Can you repair water-damaged phones?",
      answer: "Yes, we specialize in water damage repair. However, success depends on the extent of damage and how quickly you bring it in. It's best to power off the device immediately and bring it to us ASAP."
    },
    {
      question: "Do you offer same-day service?",
      answer: "Yes! Most repairs are completed the same day, with many done in under an hour. For complex issues or if parts need to be ordered, we'll give you a clear timeline."
    },
    {
      question: "What if my phone can't be repaired?",
      answer: "We believe in honesty first. If your mobile cannot be repaired or the repair isn’t worth the cost, we’ll tell you upfront — and we never charge for unsuccessful repair attempts. We’ll also guide you with the best alternatives or data recovery options"
    },
    {
      question: "Do I need an appointment?",
      answer: "While walk-ins are welcome, we recommend booking an appointment to ensure minimal wait time and that we have the necessary parts in stock."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit/debit cards, UPI, and all major digital payment methods for your convenience."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Minimal animation variants - everything from left
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  // Simple fade in from left for each FAQ item
  const faqItemVariants = {
    hidden: { 
      opacity: 0,
      x: -30
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Simple header animation
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Simple content reveal
  const contentVariants = {
    hidden: { 
      opacity: 0,
      height: 0
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Minimal button animation
  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delay: 0.5, duration: 0.4 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-200 to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers!
          </p>
        </motion.div>

        {/* FAQ Items Container */}
        <motion.div 
          className="max-w-3xl mx-auto space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow transition-shadow"
              variants={faqItemVariants}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-800 text-lg pr-8">
                  {faq.question}
                </span>
                <span className="text-sky-500 text-2xl flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              <motion.div
                className={`overflow-hidden`}
                initial="hidden"
                animate={openIndex === index ? "visible" : "hidden"}
                variants={contentVariants}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={buttonVariants}
        >
          <p className="text-lg text-gray-600 mb-4">
            Still have questions?
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-sky-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;