'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WifiOff, Zap, MessageSquare, ArrowRight, Quote } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const MARKETING_QUOTES = [
  "Stay Connected. Stay Close.",
  "Every Conversation Matters.",
  "Fast Connections. Happy Moments.",
  "Because Every Second Counts.",
  "Where Families Stay Connected.",
  "Your Digital Journey Starts Here.",
  "The Future is Connected.",
  "Making Every Click Count.",
  "Closer Than Ever.",
  "Powered By Better Connections."
];

const REALITY_QUOTES = [
  "3 days. Still waiting.",
  "My router has restarted more than my laptop.",
  "Today's speed: Loading...",
  "Customer support knows my voice now.",
  "My patience is faster than my internet.",
  "Weekend plan: Watching buffering.",
  "Ticket created. Solution pending.",
  "I can make tea before this page loads.",
  "My download is celebrating its birthday.",
  "Connection disappeared again.",
  "Ping higher than my expectations.",
  "Router is online. Internet isn't."
];

export function MarketingVsReality() {
  const [marketingIndex, setMarketingIndex] = useState(0);
  const [realityIndex, setRealityIndex] = useState(0);

  useEffect(() => {
    const mInterval = setInterval(() => {
      setMarketingIndex((prev) => (prev + 1) % MARKETING_QUOTES.length);
    }, 5000);
    
    const rInterval = setInterval(() => {
      setRealityIndex((prev) => (prev + 1) % REALITY_QUOTES.length);
    }, 4500);

    return () => {
      clearInterval(mInterval);
      clearInterval(rInterval);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#0B0B0B]">
      <div className="flex flex-col md:flex-row min-h-[80vh] md:min-h-[90vh]">
        
        {/* --- LEFT SIDE: MARKETING --- */}
        <div className="relative w-full md:w-1/2 bg-white text-black flex flex-col justify-center items-center p-8 md:p-16 overflow-hidden min-h-[50vh] md:min-h-full">
          {/* Subtle Premium Gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/50 via-white to-white pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100/40 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="relative z-10 w-full max-w-md text-center md:text-left flex flex-col h-full justify-center">
            <span className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-8 inline-block">
              Corporate Expectation
            </span>
            
            <div className="relative min-h-[200px] flex items-center justify-center md:justify-start">
              <Quote className="absolute -top-8 -left-8 w-20 h-20 text-gray-100 rotate-180 z-0" />
              
              <AnimatePresence mode="wait">
                <motion.h2
                  key={marketingIndex}
                  initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1] relative z-10"
                >
                  "{MARKETING_QUOTES[marketingIndex]}"
                </motion.h2>
              </AnimatePresence>
            </div>
            
            <div className="mt-12 opacity-40">
              <div className="w-16 h-1 bg-gray-300 rounded-full mb-4 mx-auto md:mx-0" />
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                *Fictional representation of standard telecom advertising
              </p>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: REALITY --- */}
        <div className="relative w-full md:w-1/2 bg-[#0B0B0B] text-white flex flex-col justify-center items-center p-8 md:p-16 overflow-hidden border-t-4 md:border-t-0 md:border-l-4 border-destructive/20 bg-noise min-h-[50vh] md:min-h-full">
          
          {/* Editorial / Newspaper Background Elements */}
          <div className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden flex flex-wrap gap-4 p-4 items-center justify-center">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="text-2xl font-black font-serif text-white/50 tracking-tighter rotate-[-5deg]">
                COMPLAINT #{Math.floor(Math.random() * 100000)}
              </span>
            ))}
          </div>

          <div className="relative z-10 w-full max-w-md text-center md:text-left flex flex-col h-full justify-center">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
              <span className="text-sm font-black tracking-widest text-destructive uppercase bg-destructive/10 px-3 py-1 rounded-sm border border-destructive/20">
                Public Reality
              </span>
            </div>
            
            <div className="relative min-h-[200px] flex items-center justify-center md:justify-start w-full">
              
              {/* Sticky Note Decoration */}
              <div className="absolute -top-12 -right-4 md:-right-12 w-32 h-32 bg-yellow-300/10 rounded-sm rotate-12 border border-yellow-500/20 pointer-events-none" />
              <div className="absolute -top-14 -right-2 md:-right-10 w-16 h-6 bg-white/20 backdrop-blur-sm rotate-[15deg] pointer-events-none shadow-sm" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={realityIndex}
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.95 }}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                  className="relative z-10 w-full"
                >
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-gray-100 leading-tight">
                    <span className="text-destructive mr-4 text-2xl">&gt;</span>
                    {REALITY_QUOTES[realityIndex]}
                    <motion.span 
                      animate={{ opacity: [1, 0, 1] }} 
                      transition={{ duration: 0.8, repeat: Infinity }} 
                      className="inline-block w-4 h-8 bg-destructive ml-2 align-middle translate-y-[-2px]"
                    />
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="mt-12 flex items-center justify-center md:justify-start gap-4 opacity-50">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <WifiOff className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">
                Anonymous User Experience
              </p>
            </div>
          </div>
        </div>

        {/* --- CENTRAL "VS" DIVIDER --- */}
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center"
        >
          <div className="relative w-24 h-24 bg-black rounded-full border-4 border-[#141414] shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-50" />
            <motion.div 
              animate={{ opacity: [1, 0.5, 1], rotate: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 0.2, repeatType: "mirror" }}
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-destructive/20 to-transparent"
            />
            <Zap className="absolute w-12 h-12 text-destructive opacity-30 animate-pulse" />
            <span className="relative z-10 text-3xl font-black italic text-white tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>VS</span>
          </div>
        </motion.div>

        {/* Mobile VS Badge */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 md:hidden flex items-center justify-center">
          <div className="w-16 h-16 bg-black rounded-full border-4 border-[#141414] shadow-xl flex items-center justify-center">
            <span className="text-xl font-black italic text-white tracking-tighter">VS</span>
          </div>
        </div>
      </div>

      {/* --- BOTTOM CTA --- */}
      <div className="relative w-full bg-[#0B0B0B] border-t border-white/5 py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container max-w-4xl mx-auto relative z-10"
        >
          <div className="bg-[#141414] border border-[#2D2D2D]/50 rounded-3xl p-8 md:p-12 text-center shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-destructive/10 rounded-full blur-[80px] pointer-events-none" />
            
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 relative z-10">
              What has your experience been?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto relative z-10">
              Cut through the marketing noise. Share your actual internet speed and experience with the community.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link href="#report" passHref>
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group">
                  Share Your Experience
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="#complaints" passHref>
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold rounded-full bg-white/5 hover:bg-white/10 group border-white/10">
                  <MessageSquare className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                  Read Community Stories
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
