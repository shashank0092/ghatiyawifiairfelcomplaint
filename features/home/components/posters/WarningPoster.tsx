import { PosterData } from '../../constants/posterData';
import { AlertTriangle } from 'lucide-react';

export function WarningPoster({ data }: { data: PosterData }) {
  return (
    <div className="relative w-48 h-auto bg-[#FFD600] text-black font-black p-4 shadow-xl border-4 border-black uppercase text-center transform hover:scale-105 transition-transform bg-noise overflow-hidden rounded-md">
      {/* Striped border effect */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[repeating-linear-gradient(45deg,#000,#000_10px,transparent_10px,transparent_20px)] opacity-80" />
      <div className="absolute bottom-0 left-0 w-full h-3 bg-[repeating-linear-gradient(45deg,#000,#000_10px,transparent_10px,transparent_20px)] opacity-80" />
      
      <div className="mt-4 mb-2 flex justify-center">
        <AlertTriangle className="w-10 h-10 text-red-600 drop-shadow-md" />
      </div>
      <h3 className="text-xl leading-none mb-2">{data.content}</h3>
      {data.subcontent && <p className="text-sm font-bold text-red-700 bg-black/10 px-1 py-1">{data.subcontent}</p>}
    </div>
  );
}
