import { Tag, Gift } from 'lucide-react';

const SpecialOffers = () => {
  const offers = [
    {
      icon: <Tag className="w-8 h-8" />,
      title: '10% Off First Repair',
      description: 'Get 10% discount on your first repair service with us',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Combo Offer',
      description: 'Buy a Fast Charger & Get ₹100 Off on Screen Replacement',
      color: 'from-gray-700 to-gray-800',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Special Offers
          </h2>
          <p className="text-lg text-gray-600">
            Don't miss out on our exclusive deals and discounts!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${offer.color} rounded-xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
            >
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  {offer.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-white/90">
                    {offer.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
