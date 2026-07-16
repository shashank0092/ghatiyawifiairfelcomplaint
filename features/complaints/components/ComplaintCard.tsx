'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Wifi, AlertTriangle, Calendar } from 'lucide-react';
import { Complaint } from '@/types/complaint';
import { GlassCard } from '@/components/shared/GlassCard';

export function ComplaintCard({ complaint, index }: { complaint: Complaint; index: number }) {
  const date = new Date(complaint.created_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassCard className="h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="font-bold text-lg text-primary">{complaint.name}</h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <MapPin className="w-3 h-3" />
              <span>{complaint.city}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground/80 bg-white/5 px-2 py-1 rounded-full">
            <Calendar className="w-3 h-3" />
            {date}
          </div>
        </div>

        <p className="text-foreground/90 flex-grow mb-6 whitespace-pre-wrap leading-relaxed">
          "{complaint.description}"
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
          <div className="flex items-center gap-1.5 text-xs bg-destructive/10 text-destructive px-3 py-1.5 rounded-full font-medium">
            <AlertTriangle className="w-3 h-3" />
            {complaint.issue_type}
          </div>
          <div className="flex items-center gap-1.5 text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
            <Wifi className="w-3 h-3" />
            {complaint.plan}
          </div>
          <div className="flex items-center gap-1.5 text-xs bg-white/5 text-muted-foreground px-3 py-1.5 rounded-full font-medium">
            <Clock className="w-3 h-3" />
            {complaint.duration}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
