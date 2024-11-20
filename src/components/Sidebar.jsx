// import { Link } from 'react-router-dom';

const Sidebar = () => {
  const games = [
    { name: 'League of Logos', icon: '🎮' },
    { name: 'Doting 2', icon: '🎮' },
    { name: 'Counter Sticks 2', icon: '🎯' },
    { name: 'Valorain', icon: '🎯' },
  ];

  return (
    <div className="bg-gray-800 w-64 fixed left-0 top-16 bottom-0 z-40">
      <div className="p-4">
        <h2 className="text-white text-xl font-bold mb-4 pt-4">Games</h2>
        <div className="space-y-2">
          {games.map((game, index) => (
            <div
              key={index} 
              className="flex items-center p-3 text-gray-300 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors"
            >
              <span className="mr-3">{game.icon}</span>
              <span>{game.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
