import ParticlesBackground from "../components/ParticlesBackground";
import { useState } from "react";

const Manager = () => {
  // Mock data - replace with real data later
  const [playerCards, setPlayerCards] = useState([
    {
      id: 1,
      name: "Abu",
      rarity: "Rare",
      power: 5,
      description: "A balanced fighter with high speed",
      stats: { ATK: 85, DEF: 78, SPD: 92 },
      inTeam: true
    },
    {
      id: 2,
      name: "Ali",
      rarity: "Epic",
      power: 10,
      description: "Powerful attacker with great defense",
      stats: { ATK: 95, DEF: 88, SPD: 85 },
      inTeam: true
    },
    {
      id: 3,
      name: "Ahmad",
      rarity: "Legendary",
      power: 15,
      description: "Legendary warrior with supreme stats",
      stats: { ATK: 98, DEF: 94, SPD: 91 },
      inTeam: true
    },
    {
      id: 4,
      name: "Amir",
      rarity: "Epic",
      power: 8,
      description: "Defensive specialist with good mobility",
      stats: { ATK: 88, DEF: 92, SPD: 86 },
      inTeam: true
    },
    {
      id: 5,
      name: "Aziz",
      rarity: "Rare",
      power: 6,
      description: "Fast striker with tactical advantage",
      stats: { ATK: 82, DEF: 85, SPD: 89 },
      inTeam: true
    },
    // Unused cards
    {
      id: 6,
      name: "Amin",
      rarity: "Common",
      power: 4,
      description: "Rookie fighter with potential",
      stats: { ATK: 75, DEF: 72, SPD: 78 },
      inTeam: false
    },
    {
      id: 7,
      name: "Akmal",
      rarity: "Rare",
      power: 5,
      description: "Balanced warrior with steady performance",
      stats: { ATK: 80, DEF: 83, SPD: 81 },
      inTeam: false
    },
    {
      id: 8,
      name: "Arif",
      rarity: "Epic",
      power: 9,
      description: "Skilled fighter with high attack power",
      stats: { ATK: 93, DEF: 84, SPD: 88 },
      inTeam: false
    },
    {
      id: 9,
      name: "Adli",
      rarity: "Rare",
      power: 6,
      description: "Defensive expert with counter skills",
      stats: { ATK: 79, DEF: 89, SPD: 82 },
      inTeam: false
    },
    {
      id: 10,
      name: "Afiq",
      rarity: "Common",
      power: 3,
      description: "New recruit with basic training",
      stats: { ATK: 72, DEF: 70, SPD: 75 },
      inTeam: false
    }
  ]);

  // Helper function to get gradient based on rarity
  const getRarityGradient = (rarity) => {
    switch(rarity) {
      case 'Legendary':
        return 'from-yellow-500 to-orange-500';
      case 'Epic':
        return 'from-purple-500 to-pink-500';
      case 'Rare':
        return 'from-blue-500 to-cyan-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  // Add handler for toggling team status
  const handleTeamToggle = (cardId) => {
    setPlayerCards(cards => 
      cards.map(card => 
        card.id === cardId 
          ? { ...card, inTeam: !card.inTeam }
          : card
      )
    );
  };

  const CardComponent = ({ card }) => (
    <div
      className={`bg-gradient-to-br ${getRarityGradient(card.rarity)} p-1 rounded-lg`}
    >
      <div className="bg-gray-900 rounded-lg p-3">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-white">{card.name}</h3>
          <span className="px-2 py-0.5 rounded text-xs font-semibold bg-black bg-opacity-30 text-white">
            {card.rarity}
          </span>
        </div>

        <div className="aspect-square mb-3 rounded-lg overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
            <span className="text-4xl">👤</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1 mb-2">
          <div className="bg-black bg-opacity-30 rounded p-1 text-center">
            <span className="text-xs text-gray-400">ATK</span>
            <p className="text-white font-bold">{card.stats.ATK}</p>
          </div>
          <div className="bg-black bg-opacity-30 rounded p-1 text-center">
            <span className="text-xs text-gray-400">DEF</span>
            <p className="text-white font-bold">{card.stats.DEF}</p>
          </div>
          <div className="bg-black bg-opacity-30 rounded p-1 text-center">
            <span className="text-xs text-gray-400">SPD</span>
            <p className="text-white font-bold">{card.stats.SPD}</p>
          </div>
        </div>

        <div className="text-center text-indigo-400 font-bold mb-2">
          {card.power} PWR
        </div>

        <p className="text-sm text-gray-400 mb-3 h-12 overflow-hidden">
          {card.description}
        </p>

        <button 
          onClick={() => handleTeamToggle(card.id)}
          className={`w-full py-1.5 ${
            card.inTeam ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
          } text-white rounded text-sm font-bold transition-colors`}
        >
          {card.inTeam ? 'Remove from Team' : 'Add to Team'}
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative z-10">
      <ParticlesBackground />
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Team Manager</h1>

        {/* Active Team */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Active Team</h2>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="grid grid-cols-5 gap-4">
              {playerCards.filter(card => card.inTeam).map(card => (
                <CardComponent key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>

        {/* Unused Cards */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Available Cards</h2>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="grid grid-cols-5 gap-4">
              {playerCards.filter(card => !card.inTeam).map(card => (
                <CardComponent key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager;