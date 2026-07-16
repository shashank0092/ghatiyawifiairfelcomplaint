'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WifiOff, AlertTriangle, MessageSquare, Ghost, Loader2, Frown, Activity, CloudOff } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Constant Lists for the Chaos
const HEADLINES = [
  "200 Mbps Plan.\n20 Kbps Reality.",
  "Advertisement Fast.\nReality Slow.",
  "Speed Test Se Zyada\nPatience Test.",
  "Buffering Never Ends.",
  "Welcome to the\nComplaint Wall.",
  "Promise Unlimited.\nSpeed Limited."
];

const BUBBLES = [
  "Bas ek minute aur...",
  "Abhi connect ho jayega...",
  "Refresh karo...",
  "Phir try karo...",
  "Lagta hai aaj bhi slow hai...",
  "Coffee khatam ho gayi, loading nahi."
];

import { PosterWall } from './posters/PosterWall';

export function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [bubbles, setBubbles] = useState<Array<{ id: number; text: string; x: number; y: number }>>([]);

  // Setup Headlines
  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % HEADLINES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Setup Background Elements (Run once on client to avoid hydration mismatch)
  useEffect(() => {

    // Random Speech Bubbles
    const bubbleInterval = setInterval(() => {
      const newBubble = {
        id: Date.now(),
        text: BUBBLES[Math.floor(Math.random() * BUBBLES.length)],
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
      };
      setBubbles(prev => [...prev.slice(-3), newBubble]);
    }, 3500);

    return () => clearInterval(bubbleInterval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0B0B0B] pt-20">
      
      {/* --- SATIRICAL POSTER WALL --- */}
      <PosterWall />

      {/* --- COMIC SPEECH BUBBLES --- */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <AnimatePresence>
          {bubbles.map(bubble => (
            <motion.div
              key={bubble.id}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute bg-white text-black font-bold px-4 py-2 rounded-2xl rounded-bl-none shadow-xl border-2 border-[#2D2D2D]"
              style={{ top: `${bubble.y}%`, left: `${bubble.x}%` }}
            >
              {bubble.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* --- FOREGROUND CONTENT --- */}
      <div className="container relative z-20 mx-auto px-4 text-center max-w-4xl">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-bold mb-8 shadow-[0_0_15px_rgba(255,59,48,0.2)]"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <CloudOff className="w-4 h-4" />
          </motion.div>
          <span>India's Unofficial Complaint Desk</span>
        </motion.div>

        {/* Glitch Rotating Headline */}
        <div className="h-[140px] md:h-[200px] lg:h-[220px] flex items-center justify-center mb-6">
          <AnimatePresence mode="wait">
            <motion.h1
              key={headlineIndex}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)', skewX: 10 }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)', skewX: 0 }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)', skewX: -10 }}
              transition={{ duration: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] whitespace-pre-line"
            >
              {HEADLINES[headlineIndex].split('\n').map((line, i) => (
                <span key={i} className={i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-destructive" : ""}>
                  {line}
                  <br/>
                </span>
              ))}
            </motion.h1>
          </AnimatePresence>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-12 max-w-2xl mx-auto backdrop-blur-sm bg-background/30 p-4 rounded-xl">
          Real people. Real complaints. Real internet problems.<br className="hidden md:block"/>
          <span className="text-foreground">Share your experience anonymously before your connection drops again.</span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#report" passHref>
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%", skewX: -20 }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.7 }}
              />
              <AlertTriangle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Share My Experience
            </Button>
          </Link>

          <Link href="#complaints" passHref>
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold rounded-full group">
              <MessageSquare className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
              Read Real Stories
            </Button>
          </Link>
        </div>

        {/* Fun Illustration Cluster (Crying Router / Slow Snail) */}
        <div className="mt-20 flex justify-center items-center gap-8 opacity-70">
          <motion.div
            animate={{ rotate: [-2, 2, -2], y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-16 h-16 bg-card border-2 border-border rounded-xl flex items-center justify-center">
              <WifiOff className="w-8 h-8 text-destructive absolute -top-4" />
              <Frown className="w-8 h-8 text-muted-foreground" />
            </div>
            <span className="text-xs font-bold mt-2 text-muted-foreground">Sad Router</span>
          </motion.div>

          <motion.div
            animate={{ x: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="flex flex-col items-center"
          >
            <Ghost className="w-10 h-10 text-muted-foreground" />
            <span className="text-xs font-bold mt-2 text-muted-foreground">2 Kbps Speed</span>
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="flex flex-col items-center"
          >
            <Loader2 className="w-10 h-10 text-primary" />
            <span className="text-xs font-bold mt-2 text-muted-foreground">Forever Loading</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
