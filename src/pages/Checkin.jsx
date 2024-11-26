import ParticlesBackground from "../components/ParticlesBackground";

const Checkin = () => {
  // Mock data - replace with real data later
  const weeklyCheckins = [
    { day: 1, checked: false },
    { day: 2, checked: false },
    { day: 3, checked: false },
    { day: 4, checked: false },
    { day: 5, checked: false },
    { day: 6, checked: false },
    { day: 7, checked: false },
  ];

  return (
    <div className="relative z-10">
      <ParticlesBackground />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Daily Check-in Rewards</h1>
        
        <div className="grid grid-cols-4 gap-6">
          {/* Days 1-6 */}
          <div className="col-span-3 grid grid-cols-3 gap-4">
            {weeklyCheckins.slice(0, 6).map((day) => (
              <div
                key={day.day}
                className="bg-gray-800 rounded-lg p-4 aspect-square flex flex-col items-center justify-center border-2 border-indigo-500/30 hover:border-indigo-500 transition-colors"
              >
                <div className="text-white text-lg font-bold mb-2">Day {day.day}</div>
                <div className="text-indigo-400 text-sm">+5 PWR</div>
                {day.checked && (
                  <div className="mt-2 text-green-500 text-2xl">✓</div>
                )}
              </div>
            ))}
          </div>

          {/* Day 7 - Special Reward */}
          <div className="row-span-2 bg-gradient-to-b from-indigo-900 to-indigo-800 rounded-lg p-4 flex flex-col items-center justify-center border-2 border-indigo-500/30 hover:border-indigo-500 transition-colors">
            <div className="text-white text-lg font-bold mb-4">Day 7</div>
            <div className="mb-4">
              <div className="text-6xl">👤</div>
            </div>
            <div className="text-indigo-400 text-lg font-bold">+10 PWR</div>
            <div className="mt-2 text-white text-sm">Special Reward</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8">
          <div className="flex justify-between text-white text-sm mb-2">
            <span>Progress</span>
            <span>0/7 Days</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
          </div>
        </div>

        {/* Check-in Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
            Check In Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkin;