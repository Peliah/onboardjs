import { Tour } from '@/types/dashboard/tour';

const AnalyticsDashboard = ({ tour }: { tour: Tour }) => {
  const completionRate = Math.round((tour.completions / tour.views) * 100);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-3">
            Total Views
          </p>
          <p className="text-5xl font-black text-white mb-2">{tour.views}</p>
          <p className="text-xs text-gray-500">Users who started the tour</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-3">
            Completions
          </p>
          <p className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400 mb-2">
            {tour.completions}
          </p>
          <p className="text-xs text-gray-500">Users who finished the tour</p>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
              Completion Rate
            </p>
            <p className="text-6xl font-black text-white">{completionRate}%</p>
          </div>
          <div className="w-32 h-32 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-black text-white">
                {completionRate}%
              </p>
            </div>
          </div>
        </div>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-purple-500 to-pink-500 transition-all duration-500"
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
