'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, WifiOff } from 'lucide-react';
import { Complaint } from '@/types/complaint';
import { complaintService } from '../services/supabaseService';
import { ComplaintCard } from './ComplaintCard';

export function ComplaintList({ refreshTrigger }: { refreshTrigger: number }) {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadComplaints() {
      setLoading(true);
      const data = await complaintService.getComplaints();
      setComplaints(data);
      setLoading(false);
    }
    loadComplaints();
  }, [refreshTrigger]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
        <Loader2 className="w-10 h-10 animate-spin mb-4 text-primary" />
        <p>Loading the endless list of misery...</p>
      </div>
    );
  }

  if (complaints.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20 px-4"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 mb-6">
          <WifiOff className="w-10 h-10 text-muted-foreground" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Congratulations.</h3>
        <p className="text-muted-foreground max-w-md mx-auto text-lg">
          Either Airtel fixed everything... <br/>
          or nobody found this website yet.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {complaints.map((complaint, i) => (
        <ComplaintCard key={complaint.id} complaint={complaint} index={i} />
      ))}
    </div>
  );
}
