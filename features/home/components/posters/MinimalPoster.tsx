import { PosterData } from '../../constants/posterData';

export function MinimalPoster({ data }: { data: PosterData }) {
  return (
    <div className="w-56 bg-[#181818] border border-[#2D2D2D] p-6 shadow-2xl flex flex-col justify-center bg-noise">
      <div className="w-8 h-1 bg-primary mb-4" />
      <h3 className="text-white text-2xl font-light tracking-wide mb-2">{data.content}</h3>
      {data.subcontent && <p className="text-[#888] font-medium">{data.subcontent}</p>}
    </div>
  );
}
