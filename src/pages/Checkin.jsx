import ParticlesBackground from "../components/ParticlesBackground";

const Checkin = () => {
  const weeklyCheckins = [
    { day: 1, checked: true },
    { day: 2, checked: false },
    { day: 3, checked: false },
    { day: 4, checked: false },
    { day: 5, checked: false },
    { day: 6, checked: false },
    { day: 7, checked: false },
  ];

  const DailyRewardCard = ({ day, checked, isSpecial }) => (
    <div
      className={`
        rounded-lg p-6 flex flex-col items-center justify-center border-2
        ${isSpecial 
          ? 'bg-gradient-to-b from-indigo-900 to-indigo-800 row-span-2 h-full' 
          : 'bg-gray-800/50 aspect-square'
        }
        ${checked 
          ? 'border-green-500/50 hover:border-green-500' 
          : 'border-indigo-500/30 hover:border-indigo-500'
        }
        backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]
      `}
    >
      {isSpecial ? (
        // Special Reward Card (Day 7)
        <div className="flex flex-col items-center justify-between h-full py-4">
          <div className="text-white text-xl font-bold">Day {day}</div>
          
          <div className="flex-grow flex flex-col items-center justify-center">
            <div className="bg-indigo-500/20 rounded-full p-6 mb-6">
              <div className="text-6xl">👤</div>
            </div>
            <div className="text-indigo-400 text-2xl font-bold mb-2">+10 PWR</div>
            <div className="text-white text-sm font-medium px-4 py-1 bg-indigo-500/20 rounded-full">
              Special Reward
            </div>
          </div>

          {checked && (
            <div className="text-green-500 text-3xl mt-4">✓</div>
          )}
        </div>
      ) : (
        // Regular Daily Reward Card
        <>
          <div className="text-white text-lg font-bold mb-2">Day {day}</div>
          <div className="text-indigo-400 text-sm">+5 PWR</div>
          {checked && (
            <div className="mt-2 text-green-500 text-2xl">✓</div>
          )}
        </>
      )}
    </div>
  );

  const progress = weeklyCheckins.filter(day => day.checked).length;
  const progressPercentage = (progress / 7) * 100;

  return (
    <div className="relative z-10">
      <ParticlesBackground />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Daily Check-in Rewards
        </h1>
        
        <div className="grid grid-cols-4 gap-6">
          {/* Days 1-6 */}
          <div className="col-span-3 grid grid-cols-3 gap-4">
            {weeklyCheckins.slice(0, 6).map((day) => (
              <DailyRewardCard 
                key={day.day}
                day={day.day}
                checked={day.checked}
                isSpecial={false}
              />
            ))}
          </div>

          {/* Day 7 - Special Reward */}
          <DailyRewardCard 
            day={7}
            checked={weeklyCheckins[6].checked}
            isSpecial={true}
          />
        </div>

        {/* Progress Bar */}
        <div className="mt-8 bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
          <div className="flex justify-between text-white text-sm mb-2">
            <span>Weekly Progress</span>
            <span>{progress}/{7} Days</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
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