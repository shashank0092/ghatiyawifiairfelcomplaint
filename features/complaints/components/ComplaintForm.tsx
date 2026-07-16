'use client';

import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Send } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { PLANS, ISSUE_TYPES, DURATIONS, CITIES } from '@/constants/options';
import { complaintService } from '../services/supabaseService';
import { NewComplaint } from '@/types/complaint';

const validationSchema = Yup.object({
  name: Yup.string().trim().min(2, 'Name is too short').max(50, 'Name is too long').required('Name is required'),
  city: Yup.string().required('City is required'),
  plan: Yup.string().required('Plan is required'),
  issue_type: Yup.string().required('Issue type is required'),
  duration: Yup.string().required('Duration is required'),
  description: Yup.string().trim().min(10, 'Complaint must be at least 10 characters').max(500, 'Keep it under 500 characters').required('Please describe your frustration'),
});

export function ComplaintForm({ onSuccess }: { onSuccess?: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik<NewComplaint>({
    initialValues: {
      name: '',
      city: '',
      plan: '',
      issue_type: '',
      duration: '',
      description: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      const newComplaint = await complaintService.addComplaint(values);
      setIsSubmitting(false);

      if (newComplaint) {
        toast.success("Complaint submitted successfully!", {
          description: "Hopefully they fix it (they won't)."
        });
        resetForm();
        onSuccess?.();
      } else {
        toast.error("Failed to submit complaint.", {
          description: "Even our database is as slow as your WiFi."
        });
      }
    },
  });

  const getError = (field: keyof NewComplaint) => {
    return formik.touched[field] && formik.errors[field];
  };

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Name (or Alias)</Label>
          <Input
            id="name"
            name="name"
            placeholder="Frustrated User"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={getError('name') ? 'border-destructive' : ''}
          />
          <AnimatePresence>
            {getError('name') && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm text-destructive"
              >
                {formik.errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* City */}
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Select
            value={formik.values.city}
            onValueChange={(value) => formik.setFieldValue('city', value)}
          >
            <SelectTrigger id="city" className={getError('city') ? 'border-destructive' : ''}>
              <SelectValue placeholder="Select City" />
            </SelectTrigger>
            <SelectContent>
              {CITIES.map(city => (
                <SelectItem key={city} value={city}>{city}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <AnimatePresence>
            {getError('city') && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm text-destructive"
              >
                {formik.errors.city}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Plan */}
        <div className="space-y-2">
          <Label htmlFor="plan">Internet Plan</Label>
          <Select
            value={formik.values.plan}
            onValueChange={(value) => formik.setFieldValue('plan', value)}
          >
            <SelectTrigger id="plan" className={getError('plan') ? 'border-destructive' : ''}>
              <SelectValue placeholder="Select Plan" />
            </SelectTrigger>
            <SelectContent>
              {PLANS.map(plan => (
                <SelectItem key={plan} value={plan}>{plan}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <AnimatePresence>
            {getError('plan') && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm text-destructive"
              >
                {formik.errors.plan}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Issue Type */}
        <div className="space-y-2">
          <Label htmlFor="issue_type">Issue Type</Label>
          <Select
            value={formik.values.issue_type}
            onValueChange={(value) => formik.setFieldValue('issue_type', value)}
          >
            <SelectTrigger id="issue_type" className={getError('issue_type') ? 'border-destructive' : ''}>
              <SelectValue placeholder="Select Issue" />
            </SelectTrigger>
            <SelectContent>
              {ISSUE_TYPES.map(issue => (
                <SelectItem key={issue} value={issue}>{issue}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <AnimatePresence>
            {getError('issue_type') && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm text-destructive"
              >
                {formik.errors.issue_type}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Duration */}
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="duration">How long has it been broken?</Label>
          <Select
            value={formik.values.duration}
            onValueChange={(value) => formik.setFieldValue('duration', value)}
          >
            <SelectTrigger id="duration" className={getError('duration') ? 'border-destructive' : ''}>
              <SelectValue placeholder="Select Duration" />
            </SelectTrigger>
            <SelectContent>
              {DURATIONS.map(duration => (
                <SelectItem key={duration} value={duration}>{duration}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <AnimatePresence>
            {getError('duration') && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm text-destructive"
              >
                {formik.errors.duration}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Text */}
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="description">Complaint Description</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Vent your frustration here..."
            className={`min-h-[120px] resize-none ${getError('description') ? 'border-destructive' : ''}`}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <AnimatePresence>
            {getError('description') && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm text-destructive"
              >
                {formik.errors.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full h-12 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending to the void...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Submit Complaint
          </>
        )}
      </Button>
    </form>
  );
}
