import { Tour } from '@/types/dashboard/tour';

const TourItem = ({
  tour,
  isSelected,
  setSelectedTour,
}: {
  tour: Tour;
  isSelected: boolean;
  setSelectedTour: (tour: Tour) => void;
}) => {
  const completionRate = Math.round((tour.completions / tour.views) * 100);

  return (
    <div
      onClick={() => setSelectedTour(tour)}
      className={`relative group cursor-pointer transition-all duration-300 ${
        isSelected ? 'ring-2 ring-offset-2 ring-purple-500' : ''
      }`}
    >
      <div
        className={`h-40 rounded-2xl bg-linear-to-br ${tour.color} p-6 text-white overflow-hidden relative`}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300"></div>

        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-1">{tour.name}</h3>
            <p className="text-sm opacity-90">{tour.description}</p>
          </div>

          <div className="flex items-center justify-between">
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${
                tour.status === 'live'
                  ? 'bg-white/20 backdrop-blur'
                  : 'bg-black/20 backdrop-blur'
              }`}
            >
              {tour.status === 'live' ? '● LIVE' : '⊗ PAUSED'}
            </span>
            <span className="text-xs font-semibold">{tour.steps} steps</span>
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-gray-900 rounded-lg p-2">
          <p className="text-gray-400 text-xs">Views</p>
          <p className="text-white font-bold">{tour.views}</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-2">
          <p className="text-gray-400 text-xs">Rate</p>
          <p className="text-white font-bold">{completionRate}%</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-2">
          <p className="text-gray-400 text-xs">Complete</p>
          <p className="text-white font-bold">{tour.completions}</p>
        </div>
      </div>
    </div>
  );
};

export default TourItem;
