const CardPacks = ({ onBuyPack }) => {
  const basicPack = {
    id: 1,
    price: 1000,
    description: 'Contains 3 random player cards:',
    contents: [
      '70% Common',
      '25% Rare',
      '5% Epic',
    ]
  };

  const premiumPack = {
    id: 2,
    price: 5000,
    description: 'Contains 5 random player cards:',
    contents: [
      '40% Rare',
      '40% Epic',
      '20% Legendary',
      'Guaranteed 1 Epic+'
    ]
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5 text-center text-white">Card Packs</h2>
      <div className="flex justify-center gap-6">
        {/* Basic Pack */}
        <div className="w-56 group relative">
          <div className="bg-gray-800 rounded-xl shadow-lg p-4 h-full flex flex-col border border-gray-700">
            {/* Pack Design */}
            <div className="relative mb-3 aspect-[3/4] bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-3xl mb-1">🎮</div>
                  <h3 className="text-lg font-bold">Basic Pack</h3>
                  <p className="text-xs opacity-90">3 Cards</p>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-white via-transparent to-transparent"></div>
            </div>

            {/* Pack Info */}
            <div className="text-center mb-2">
              <p className="text-xl font-bold text-indigo-400">{basicPack.price} LYT</p>
              <p className="text-xs text-gray-400 mb-2">{basicPack.description}</p>
            </div>

            {/* Contents */}
            <div className="bg-gray-900 rounded-lg p-2 mb-3 flex-grow">
              <ul className="space-y-0.5 text-left">
                {basicPack.contents.map((item, index) => (
                  <li key={index} className="text-xs text-gray-400 flex items-center">
                    <span className="mr-1 text-indigo-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onBuyPack(basicPack.id, basicPack.price)}
              className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity text-xs font-bold uppercase tracking-wider"
            >
              Buy Basic Pack
            </button>
          </div>
        </div>

        {/* Premium Pack */}
        <div className="w-56 group relative">
          <div className="absolute -top-2 right-2 z-10">
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-0.5 rounded-full text-xs font-bold shadow-lg">
              BEST VALUE
            </span>
          </div>

          <div className="bg-gray-800 rounded-xl shadow-lg p-4 h-full flex flex-col border border-purple-500/30">
            {/* Premium Pack Design */}
            <div className="relative mb-3 aspect-[3/4] bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-3xl mb-1">👑</div>
                  <h3 className="text-lg font-bold">Premium Pack</h3>
                  <p className="text-xs opacity-90">5 Cards</p>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-white via-transparent to-transparent"></div>
            </div>

            {/* Pack Info */}
            <div className="text-center mb-2">
              <p className="text-xl font-bold text-indigo-400">{premiumPack.price} LYT</p>
              <p className="text-xs text-gray-400 mb-2">{premiumPack.description}</p>
            </div>

            {/* Contents */}
            <div className="bg-gray-900 rounded-lg p-2 mb-3 flex-grow">
              <ul className="space-y-0.5 text-left">
                {premiumPack.contents.map((item, index) => (
                  <li key={index} className="text-xs text-gray-400 flex items-center">
                    <span className="mr-1 text-indigo-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onBuyPack(premiumPack.id, premiumPack.price)}
              className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity text-xs font-bold uppercase tracking-wider"
            >
              Buy Premium Pack
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPacks; 