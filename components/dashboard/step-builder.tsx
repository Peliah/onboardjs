import { Tour } from '@/types/dashboard/tour';
import { Edit3, Trash2 } from 'lucide-react';

const StepBuilder = ({ tour }: { tour: Tour }) => (
  <div className="space-y-4">
    {[1, 2, 3, 4, 5].map((step) => (
      <div key={step} className="group relative">
        <div className="h-px bg-linear-to-r from-gray-800 via-gray-700 to-gray-800 mb-4"></div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center font-black text-white text-lg">
              {step}
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder={`Step ${step} title`}
                className="bg-gray-800 border border-gray-700 rounded-lg w-full px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 mb-3"
              />
              <textarea
                placeholder="Step description and instructions..."
                rows={3}
                className="bg-gray-800 border border-gray-700 rounded-lg w-full px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 resize-none"
              ></textarea>
            </div>
            <div className="shrink-0 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="edit"
              >
                <Edit3 size={18} className="text-gray-400 hover:text-white" />
              </button>
              <button
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="delete"
              >
                <Trash2
                  size={18}
                  className="text-gray-400 hover:text-red-400"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}

    <button className="w-full py-4 border-2 border-dashed border-gray-700 rounded-xl text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-colors font-bold text-sm uppercase tracking-wider">
      + Add Step
    </button>
  </div>
);

export default StepBuilder;
