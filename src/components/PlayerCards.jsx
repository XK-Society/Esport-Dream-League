const PlayerCards = ({ cards, onBuyCard, truncateAddress }) => {
  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'Legendary':
        return 'from-yellow-400 to-amber-600 text-white';
      case 'Epic':
        return 'from-purple-500 to-pink-500 text-white';
      case 'Rare':
        return 'from-blue-500 to-cyan-500 text-white';
      default:
        return 'from-gray-400 to-gray-600 text-white';
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5 text-center text-white mt-10">Player Cards Marketplace</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
        {cards.map((card) => (
          <div key={card.id} className="w-64 group relative">
            <div className="relative transform transition-all duration-300 group-hover:scale-105">
              <div className={`bg-gradient-to-br ${getRarityColor(card.rarity)} p-1 rounded-lg shadow-lg`}>
                <div className="bg-gray-900 rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-white">{card.name}</h3>
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-black bg-opacity-30">
                      {card.rarity}
                    </span>
                  </div>

                  <div className="aspect-square mb-3 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                      <span className="text-5xl">👤</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-1 mb-3">
                    <div className="bg-black bg-opacity-30 rounded p-1 text-center">
                      <span className="text-xs text-gray-400">ATK</span>
                      <p className="text-white font-bold">85</p>
                    </div>
                    <div className="bg-black bg-opacity-30 rounded p-1 text-center">
                      <span className="text-xs text-gray-400">DEF</span>
                      <p className="text-white font-bold">78</p>
                    </div>
                    <div className="bg-black bg-opacity-30 rounded p-1 text-center">
                      <span className="text-xs text-gray-400">SPD</span>
                      <p className="text-white font-bold">92</p>
                    </div>
                  </div>

                  <div className="bg-black bg-opacity-30 rounded-lg p-2 mb-3">
                    <div className="flex justify-between items-center text-xs text-gray-300">
                      <span>Seller:</span>
                      <span className="font-medium">{card.seller.username}</span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {truncateAddress(card.seller.address)}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-center text-white font-bold text-xl">
                      {card.price} LYT
                    </p>
                    <button
                      onClick={() => onBuyCard(card.id, card.price)}
                      className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-bold uppercase tracking-wider"
                    >
                      Buy Card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerCards; 