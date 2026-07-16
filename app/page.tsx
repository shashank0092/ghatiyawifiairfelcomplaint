'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WifiOff, Activity, AlertCircle, Frown } from 'lucide-react';

import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { GlassCard } from '@/components/shared/GlassCard';
import { Hero } from '@/features/home/components/Hero';
import { MarketingVsReality } from '@/features/home/components/MarketingVsReality';
import { HallOfExcuses } from '@/features/home/components/HallOfExcuses';
import { ComplaintForm } from '@/features/complaints/components/ComplaintForm';
import { ComplaintList } from '@/features/complaints/components/ComplaintList';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSuccess = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-foreground overflow-hidden">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Marketing vs Reality Section */}
      <MarketingVsReality />

      {/* Hall of Excuses Section */}
      <HallOfExcuses />

      {/* Form Section */}
      <section id="report" className="py-20 bg-[#141414] relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">Vent Your Frustration.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Is your router blinking red? Are you getting 2 Kbps on a 200 Mbps plan? 
                Is customer support asking you to "restart the router" for the 50th time? 
                We feel your pain. Put it on the wall.
              </p>
              
              <div className="hidden lg:flex justify-center items-center mt-12 opacity-80">
                {/* Floating animated icon cluster */}
                <div className="relative w-64 h-64">
                  <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-24 h-24 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-md"
                  >
                    <WifiOff className="w-12 h-12 text-destructive" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full border border-primary/20 flex items-center justify-center backdrop-blur-md"
                  >
                    <span className="text-2xl font-black text-primary">2 Kbps</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="!bg-[#1B1B1B] !border-[#2D2D2D]/50 shadow-2xl p-6 md:p-8">
                <ComplaintForm onSuccess={handleSuccess} />
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Complaints Wall Section */}
      <section id="complaints" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">The Wall of Misery</h2>
            <p className="text-lg text-muted-foreground">
              Read the struggles of fellow warriors who tried to download a 5MB PDF and failed.
            </p>
          </div>
          
          <ComplaintList refreshTrigger={refreshKey} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
