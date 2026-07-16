'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PosterData, generatePosters } from '../../constants/posterData';

import { WarningPoster } from './WarningPoster';
import { StickyNote } from './StickyNote';
import { ErrorDialog } from './ErrorDialog';
import { TerminalScreen } from './TerminalScreen';
import { RetroAd } from './RetroAd';
import { MinimalPoster } from './MinimalPoster';

const renderPoster = (data: PosterData) => {
  switch (data.type) {
    case 'warning': return <WarningPoster data={data} />;
    case 'sticky': return <StickyNote data={data} />;
    case 'error': return <ErrorDialog data={data} />;
    case 'terminal': return <TerminalScreen data={data} />;
    case 'retro': return <RetroAd data={data} />;
    case 'minimal': return <MinimalPoster data={data} />;
    default: return null;
  }
};

export function PosterWall() {
  const [posters, setPosters] = useState<PosterData[]>([]);
  const { scrollYProgress } = useScroll();
  
  // Parallax effect for the entire wall
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);

  useEffect(() => {
    // Generate only on client to avoid hydration mismatches
    setPosters(generatePosters());
  }, []);

  return (
    <motion.div style={{ y: yParallax }} className="absolute inset-0 pointer-events-none select-none z-0">
      {posters.map((poster) => (
        <motion.div
          key={poster.id}
          className="absolute"
          style={{
            top: `${poster.y}%`,
            left: `${poster.x}%`,
            zIndex: poster.zIndex,
          }}
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: poster.rotate - 10
          }}
          animate={{
            opacity: 1,
            scale: poster.scale,
            rotate: poster.rotate,
            // Subtle floating animation
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: poster.animationDelay * 0.2 },
            scale: { duration: 0.8, delay: poster.animationDelay * 0.2, type: 'spring' },
            rotate: { duration: 0.8, delay: poster.animationDelay * 0.2 },
            y: { 
              duration: 4 + (poster.animationDelay), 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: poster.animationDelay * 0.2
            }
          }}
        >
          {/* Wrapper to add a slight shadow behind the component bounding box */}
          <div className="drop-shadow-2xl">
            {renderPoster(poster)}
          </div>
        </motion.div>
      ))}
      
      {/* Dark gradient overlay to ensure text on top is readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/40 via-[#0B0B0B]/80 to-[#0B0B0B] pointer-events-none z-10" />
    </motion.div>
  );
}
