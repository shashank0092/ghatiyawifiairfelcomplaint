import { supabase } from '@/lib/supabase';
import { Complaint, NewComplaint } from '@/types/complaint';

export const complaintService = {
  async getComplaints(): Promise<Complaint[]> {
    try {
      const { data, error } = await supabase
        .from('complaints')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        // If it's a fetch error due to placeholder URL, don't pollute the console
        if (error.message !== 'Failed to fetch') {
          console.error('Error fetching complaints from Supabase:', error);
        }
        return []; // return empty if table doesn't exist yet
      }

      return data as Complaint[];
    } catch (e) {
      console.error(e);
      return [];
    }
  },

  async addComplaint(complaint: NewComplaint): Promise<Complaint | null> {
    try {
      const { data, error } = await supabase
        .from('complaints')
        .insert([{
          name: complaint.name,
          city: complaint.city,
          plan: complaint.plan,
          issue_type: complaint.issue_type,
          duration: complaint.duration,
          description: complaint.description
        }])
        .select()
        .single();

      if (error) {
        console.error('Error adding complaint:', error);
        return null;
      }

      return data as Complaint;
    } catch (e) {
      console.error(e);
      return null;
    }
  },
};
