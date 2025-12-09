import { Tour } from '@/types/dashboard/tour';
import { Share2 } from 'lucide-react';

const EmbedSection = ({ tour }: { tour: Tour }) => {
  const embedCode = `<script src="https://tours.app/embed.js?id=${tour.id}"></script>`;

  return (
    <div className="space-y-6">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
        <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">
          Embed Code
        </p>
        <div className="bg-black rounded-lg p-6 font-mono text-sm text-cyan-400 overflow-x-auto mb-6 border border-gray-800">
          <code>{embedCode}</code>
        </div>
        <button className="w-full bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 uppercase tracking-wider text-sm">
          <Share2 size={18} />
          Copy Code
        </button>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
        <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
          Installation
        </p>
        <ol className="space-y-4 text-sm text-gray-300">
          <li className="flex gap-3">
            <span className="text-purple-400 font-bold">01</span>
            <span>Copy the embed code above</span>
          </li>
          <li className="flex gap-3">
            <span className="text-purple-400 font-bold">02</span>
            <span>Paste it before the closing &lt;/body&gt; tag</span>
          </li>
          <li className="flex gap-3">
            <span className="text-purple-400 font-bold">03</span>
            <span>Your tour will automatically appear for new users</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default EmbedSection;
