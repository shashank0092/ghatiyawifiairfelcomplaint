import { PosterData } from '../../constants/posterData';
import { Terminal } from 'lucide-react';

export function TerminalScreen({ data }: { data: PosterData }) {
  return (
    <div className="w-56 bg-black border border-green-800 rounded-md p-3 font-mono text-green-500 shadow-[0_0_15px_rgba(0,255,0,0.1)]">
      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-green-900 opacity-50">
        <Terminal className="w-3 h-3" />
        <span className="text-[10px]">root@router:~</span>
      </div>
      <p className="text-sm">
        <span className="text-green-300">&gt; </span>
        {data.content}
      </p>
      {data.subcontent && (
        <p className="text-xs mt-2 text-green-600">
          [!] {data.subcontent}
          <span className="animate-pulse inline-block w-2 h-3 bg-green-500 ml-1 translate-y-[2px]" />
        </p>
      )}
    </div>
  );
}
