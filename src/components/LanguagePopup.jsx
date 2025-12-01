export default function LanguagePopup({ onSelect }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-[9999]">
      <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/20 text-white rounded-2xl p-8 text-center shadow-2xl w-80 animate-fadeIn scale-95 hover:scale-100 transition-transform duration-500">
        <h2 className="text-2xl font-bold mb-3 text-primary">
          👋 Welcome to AmarMobile!
        </h2>
        <p className="text-sm text-gray-200 mb-6">
          Choose your preferred language.
        </p>

        <div className="flex justify-around">
          <button
            onClick={() => onSelect("en")}
            className="px-6 py-2 rounded-lg font-medium bg-primary text-black hover:bg-yellow-400 transition-all duration-300 shadow-md"
          >
            English
          </button>

          <button
            onClick={() => onSelect("bn")}
            className="px-6 py-2 rounded-lg font-medium bg-transparent border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 shadow-md"
          >
            বাংলা
          </button>
        </div>
      </div>
    </div>
  );
}
