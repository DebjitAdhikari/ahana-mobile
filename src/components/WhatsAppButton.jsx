import { FaWhatsapp } from "react-icons/fa"

function WhatsAppButton() {
    return (
        <div className="h-14 w-14 sm:w-20 sm:h-20 text-white rounded-full  animate-float bg-green-500 px-4 py-2 fixed z-[100] sm:bottom-4 bottom-1 sm:right-4 right-2   mt-4">
    <a
      href="https://wa.me/919332274472"
      target="_blank"
      rel="noopener noreferrer"
      className="     "
    >
      {/* <ChartBarIcon className="w-5 h-5" /> */}
      <FaWhatsapp className='w-full h-full'></FaWhatsapp>
    </a>
  </div>
    )
}

export default WhatsAppButton
