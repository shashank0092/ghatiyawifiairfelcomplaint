'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WifiOff, Activity, MessageSquareWarning } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B0B0B]/80 backdrop-blur-md border-b border-[#2D2D2D] py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-destructive/10 text-destructive group-hover:bg-destructive group-hover:text-destructive-foreground transition-colors">
            <WifiOff className="w-5 h-5" />
            <motion.div
              className="absolute inset-0 rounded-full border border-destructive"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:inline-block">
            Ghatiya<span className="text-destructive">WiFi</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#complaints" className="hover:text-primary transition-colors flex items-center gap-2">
            <MessageSquareWarning className="w-4 h-4" />
            Complaint Wall
          </Link>
          <Link href="#stats" className="hover:text-primary transition-colors flex items-center gap-2">
            <Activity className="w-4 h-4" />
            Statistics
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="#report" passHref>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 font-bold">
              Report Issue
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
