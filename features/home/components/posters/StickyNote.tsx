import { PosterData } from '../../constants/posterData';

export function StickyNote({ data }: { data: PosterData }) {
  // Randomize sticky color a bit
  const colors = ['bg-yellow-300', 'bg-pink-300', 'bg-green-300', 'bg-blue-300'];
  const color = colors[data.id % colors.length];

  return (
    <div className={`relative w-40 h-40 ${color} text-black p-4 shadow-md font-sans bg-noise flex flex-col justify-center`}>
      <div className="tape" />
      <p className="text-lg font-bold marker-font leading-snug transform -rotate-2">{data.content}</p>
      {data.subcontent && <p className="text-md font-medium mt-2 transform rotate-1 text-black/80">{data.subcontent}</p>}
    </div>
  );
}
