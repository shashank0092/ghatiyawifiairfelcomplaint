import { PosterData } from '../../constants/posterData';

export function RetroAd({ data }: { data: PosterData }) {
  return (
    <div className="w-52 h-72 bg-[#ECECEC] text-[#B71C1C] p-4 border-[6px] border-[#B71C1C] flex flex-col justify-between shadow-2xl bg-halftone">
      <div className="bg-white/90 p-2 border border-[#B71C1C] shadow-sm transform -rotate-2">
        <h2 className="text-3xl font-black uppercase leading-none tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>
          {data.content}
        </h2>
      </div>
      
      {data.subcontent && (
        <div className="bg-[#B71C1C] text-[#ECECEC] p-2 transform rotate-1 mt-auto">
          <p className="text-lg font-bold uppercase leading-tight">{data.subcontent}</p>
        </div>
      )}
      
      <div className="absolute bottom-2 right-2 text-[8px] font-mono text-[#B71C1C] opacity-60">
        Est. 2024
      </div>
    </div>
  );
}
