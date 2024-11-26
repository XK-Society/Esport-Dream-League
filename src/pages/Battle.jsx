import ParticlesBackground from "../components/ParticlesBackground";

const Battle = () => {
  // Mock battle data
  const player1 = {
    name: "Abu",
    power: 5,
    stats: {
      ATK: 85,
      DEF: 78,
      SPD: 92
    }
  };

  const player2 = {
    name: "Ali",
    power: 10,
    stats: {
      ATK: 95,
      DEF: 88,
      SPD: 85
    }
  };

  return (
    <div className="relative z-10">
      <ParticlesBackground />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Battle Arena</h1>
        
        <div className="flex justify-center items-center gap-8">
          {/* Player 1 Card */}
          <div className="w-64">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-1 rounded-lg">
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="font-bold text-white text-center mb-3">{player1.name}</h3>
                
                <div className="aspect-square mb-3 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <span className="text-5xl">👤</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1 mb-3">
                  <div className="bg-black bg-opacity-30 rounded p-1 text-center">
                    <span className="text-xs text-gray-400">ATK</span>
                    <p className="text-white font-bold">{player1.stats.ATK}</p>
                  </div>
                  <div className="bg-black bg-opacity-30 rounded p-1 text-center">
                    <span className="text-xs text-gray-400">DEF</span>
                    <p className="text-white font-bold">{player1.stats.DEF}</p>
                  </div>
                  <div className="bg-black bg-opacity-30 rounded p-1 text-center">
                    <span className="text-xs text-gray-400">SPD</span>
                    <p className="text-white font-bold">{player1.stats.SPD}</p>
                  </div>
                </div>

                <div className="text-center text-indigo-400 font-bold">
                  {player1.power} PWR
                </div>
              </div>
            </div>
          </div>

          {/* VS Badge */}
          <div className="flex flex-col items-center">
            <div className="bg-red-600 text-white px-4 py-2 rounded-full font-bold text-xl">
              VS
            </div>
          </div>

          {/* Player 2 Card */}
          <div className="w-64">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-1 rounded-lg">
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="font-bold text-white text-center mb-3">{player2.name}</h3>
                
                <div className="aspect-square mb-3 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <span className="text-5xl">👤</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1 mb-3">
                  <div className="bg-black bg-opacity-30 rounded p-1 text-center">
                    <span className="text-xs text-gray-400">ATK</span>
                    <p className="text-white font-bold">{player2.stats.ATK}</p>
                  </div>
                  <div className="bg-black bg-opacity-30 rounded p-1 text-center">
                    <span className="text-xs text-gray-400">DEF</span>
                    <p className="text-white font-bold">{player2.stats.DEF}</p>
                  </div>
                  <div className="bg-black bg-opacity-30 rounded p-1 text-center">
                    <span className="text-xs text-gray-400">SPD</span>
                    <p className="text-white font-bold">{player2.stats.SPD}</p>
                  </div>
                </div>

                <div className="text-center text-indigo-400 font-bold">
                  {player2.power} PWR
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Battle Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
            Start Battle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Battle;