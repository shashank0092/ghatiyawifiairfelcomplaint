import { PosterData } from '../../constants/posterData';
import { X } from 'lucide-react';

export function ErrorDialog({ data }: { data: PosterData }) {
  return (
    <div className="w-64 bg-[#E0E0E0] border-2 border-white shadow-[4px_4px_0_rgba(0,0,0,0.2)] rounded-sm overflow-hidden text-black font-sans">
      <div className="bg-[#0000AA] text-white flex justify-between items-center px-2 py-1">
        <span className="text-xs font-bold tracking-wide">Error</span>
        <div className="bg-[#C0C0C0] p-0.5 border border-white rounded-sm cursor-pointer">
          <X className="w-3 h-3 text-black" />
        </div>
      </div>
      <div className="p-4 flex flex-col items-center text-center">
        <div className="w-8 h-8 rounded-full bg-red-500 text-white font-bold flex items-center justify-center mb-3 border-2 border-white shadow-sm">
          X
        </div>
        <p className="text-sm font-semibold mb-1">{data.content}</p>
        {data.subcontent && <p className="text-xs mt-1 text-gray-700">{data.subcontent}</p>}
        <button className="mt-4 bg-[#C0C0C0] border-2 border-t-white border-l-white border-b-gray-600 border-r-gray-600 px-6 py-1 text-xs active:border-t-gray-600 active:border-l-gray-600 active:border-b-white active:border-r-white">
          OK
        </button>
      </div>
    </div>
  );
}
