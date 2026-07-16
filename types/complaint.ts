export interface NewComplaint {
  name: string;
  description: string;
  city: string;
  plan: string;
  issue_type: string;
  duration: string;
}

export interface Complaint extends NewComplaint {
  id: string;
  created_at: string;
}
