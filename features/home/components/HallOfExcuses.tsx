'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, MessageCircle, AlertTriangle, ArrowRight, Share2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface AwardData {
  id: number;
  rank: 'gold' | 'silver' | 'bronze' | 'medal';
  excuse: string;
  reaction: string;
  popularity: number;
  emoji: string;
}

const AWARDS: AwardData[] = [
  {
    id: 1,
    rank: 'gold',
    excuse: "We're checking the issue.",
    reaction: "They've been checking for days.",
    popularity: 98,
    emoji: "⭐⭐⭐⭐⭐"
  },
  {
    id: 2,
    rank: 'silver',
    excuse: "Please restart your router.",
    reaction: "Restart count: 27",
    popularity: 95,
    emoji: "🔄"
  },
  {
    id: 3,
    rank: 'bronze',
    excuse: "Our technical team is working.",
    reaction: "I hope they're getting some sleep.",
    popularity: 94,
    emoji: "👷"
  },
  {
    id: 4,
    rank: 'medal',
    excuse: "Please wait a little longer.",
    reaction: "I've already watched three episodes.",
    popularity: 91,
    emoji: "⏳"
  },
  {
    id: 5,
    rank: 'medal',
    excuse: "We appreciate your patience.",
    reaction: "I'm running out of it.",
    popularity: 93,
    emoji: "🧘"
  },
  {
    id: 6,
    rank: 'medal',
    excuse: "Your request has been forwarded.",
    reaction: "Forwarded to where?",
    popularity: 89,
    emoji: "➡️"
  },
  {
    id: 7,
    rank: 'medal',
    excuse: "We'll get back to you.",
    reaction: "I'm still here.",
    popularity: 90,
    emoji: "📞"
  },
  {
    id: 8,
    rank: 'medal',
    excuse: "The engineer has been notified.",
    reaction: "I hope they got the message.",
    popularity: 88,
    emoji: "📝"
  }
];

function ExcuseCard({ data }: { data: AwardData }) {
  const [isHovered, setIsHovered] = useState(false);

  const borderColors = {
    gold: 'border-yellow-400/50 hover:border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)]',
    silver: 'border-gray-300/50 hover:border-gray-300 shadow-[0_0_15px_rgba(209,213,219,0.2)] hover:shadow-[0_0_30px_rgba(209,213,219,0.4)]',
    bronze: 'border-amber-600/50 hover:border-amber-600 shadow-[0_0_15px_rgba(217,119,6,0.2)] hover:shadow-[0_0_30px_rgba(217,119,6,0.4)]',
    medal: 'border-white/10 hover:border-white/30 shadow-none hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]'
  };

  const badgeColors = {
    gold: 'bg-yellow-400 text-black',
    silver: 'bg-gray-300 text-black',
    bronze: 'bg-amber-600 text-white',
    medal: 'bg-white/10 text-white'
  };

  const badgeLabels = {
    gold: '🥇 GOLD AWARD',
    silver: '🥈 SILVER AWARD',
    bronze: '🥉 BRONZE AWARD',
    medal: '🏅 HONORABLE MENTION'
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative w-[300px] md:w-auto shrink-0 flex flex-col bg-white/5 backdrop-blur-xl border-2 rounded-2xl p-6 transition-colors duration-300 overflow-hidden ${borderColors[data.rank]}`}
    >
      {/* Animated Shine Effect */}
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={isHovered ? { x: '200%', opacity: 0.15 } : { x: '-100%', opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 z-0"
      />

      {/* Tiny Confetti on Hover (Framer Motion trick) */}
      <AnimatePresence>
        {isHovered && data.rank !== 'medal' && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 1.5], y: -30 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-4 right-4 text-2xl z-0"
          >
            ✨
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col h-full">
        {/* Badge */}
        <div className="flex items-center justify-between mb-6">
          <span className={`text-xs font-black px-3 py-1 rounded-full ${badgeColors[data.rank]}`}>
            {badgeLabels[data.rank]}
          </span>
          <motion.div animate={isHovered ? { rotate: [0, -15, 15, -15, 0] } : {}} transition={{ duration: 0.5 }}>
            <Trophy className={`w-6 h-6 ${data.rank === 'gold' ? 'text-yellow-400' : data.rank === 'silver' ? 'text-gray-300' : data.rank === 'bronze' ? 'text-amber-600' : 'text-white/50'}`} />
          </motion.div>
        </div>

        {/* Excuse Text */}
        <h3 className="text-2xl font-bold text-white mb-6 leading-snug">
          "{data.excuse}"
        </h3>

        {/* Community Reaction */}
        <div className="mt-auto">
          <div className="bg-black/40 rounded-xl p-4 mb-6 relative group border border-white/5">
            {/* Speech bubble pointer */}
            <div className="absolute -top-2 left-4 w-4 h-4 bg-black/40 rotate-45 border-t border-l border-white/5" />
            
            <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground uppercase font-bold tracking-widest">
              <MessageCircle className="w-3 h-3" />
              Community Reaction
            </div>
            <AnimatePresence mode="wait">
              <motion.p 
                key={isHovered ? 'hovered' : 'static'}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-gray-300 font-medium italic"
              >
                {isHovered ? (["I know this script by heart.", "Classic.", "Legendary response.", "This deserves a ringtone."][Math.floor(Math.random() * 4)]) : data.reaction}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Popularity Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Heard This Before</span>
              <span className="text-lg font-black text-white">{data.popularity}%</span>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${data.popularity}%` }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                className={`h-full rounded-full ${badgeColors[data.rank]}`}
              />
            </div>
            <div className="text-right text-xs mt-1">{data.emoji}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function HallOfExcuses() {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden text-white">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Spotlight */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent blur-[100px] rounded-full" />
        
        {/* Floating Background Icons */}
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 8 }} className="absolute top-[10%] left-[10%] opacity-5">
          <Trophy className="w-48 h-48" />
        </motion.div>
        <motion.div animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 10, delay: 1 }} className="absolute bottom-[20%] right-[5%] opacity-5">
          <AlertTriangle className="w-64 h-64" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-bold mb-8 shadow-[0_0_15px_rgba(250,204,21,0.1)]"
          >
            <Trophy className="w-4 h-4" />
            <span>COMMUNITY HALL OF EXCUSES</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 leading-tight"
          >
            The Greatest Hits of <br className="hidden md:block"/> Internet Frustration
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground font-medium"
          >
            Collected from thousands of customer experiences. Some responses feel legendary because everyone has heard them at least once.
          </motion.p>
        </div>

        {/* Awards Grid / Mobile Carousel */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {AWARDS.map((award, index) => (
            <motion.div 
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="snap-center"
            >
              <ExcuseCard data={award} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px] pointer-events-none" />
            
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 relative z-10">
              Have you heard one of these before?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto relative z-10">
              Share your own experience and help the community discover the next legendary response.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link href="#report" passHref>
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-white text-black hover:bg-gray-200 rounded-full group">
                  <Share2 className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Share My Experience
                </Button>
              </Link>
              
              <Link href="#complaints" passHref>
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold rounded-full bg-white/5 hover:bg-white/10 group border-white/10">
                  <Star className="w-5 h-5 mr-2 group-hover:text-yellow-500 transition-colors" />
                  Read Community Stories
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Global CSS for hiding scrollbar specifically in this section if needed */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
