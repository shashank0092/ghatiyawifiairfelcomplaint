export type PosterType = 'warning' | 'sticky' | 'error' | 'terminal' | 'retro' | 'minimal';

export interface PosterData {
  id: number;
  type: PosterType;
  content: string;
  subcontent?: string;
  x: number; // percentage vw
  y: number; // percentage vh
  rotate: number; // degrees
  scale: number;
  zIndex: number;
  animationDelay: number;
}

const PHRASES = [
  { c: "Expectation: Fiber.", s: "Reality: Meditation.", t: 'minimal' },
  { c: "200 Mbps On Paper", s: "2 Mbps In Reality", t: 'retro' },
  { c: "Loading...", s: "Character Development Complete.", t: 'error' },
  { c: "Unlimited Plan", s: "Limited Patience", t: 'warning' },
  { c: "Hope Full", s: "Signal Empty", t: 'sticky' },
  { c: "Today's Achievement", s: "One Webpage Opened", t: 'retro' },
  { c: "Buffering", s: "is My Cardio", t: 'minimal' },
  { c: "Engineer ETA", s: "Unknown", t: 'terminal' },
  { c: "Ticket Raised", s: "Hope Raised", t: 'sticky' },
  { c: "Customer Support", s: "Knows Me Personally", t: 'retro' },
  { c: "My Router", s: "Needs Therapy", t: 'warning' },
  { c: "Ping: 999", s: "", t: 'terminal' },
  { c: "Connection Lost", s: "Again", t: 'error' },
  { c: "Restart Count: 17", s: "", t: 'sticky' },
  { c: "Waiting Since", s: "Yesterday", t: 'minimal' },
  { c: "Internet", s: "On Vacation", t: 'warning' },
  { c: "Speed Missing", s: "", t: 'retro' },
  { c: "Patience Loading...", s: "", t: 'terminal' },
  { c: "Network Busy", s: "", t: 'error' },
  { c: "Retry Again", s: "", t: 'sticky' },
  { c: "404", s: "Speed Not Found", t: 'warning' },
  { c: "Complaint Submitted", s: "Emotion Accepted", t: 'retro' },
  { c: "Signal Found", s: "Performance Missing", t: 'minimal' },
  { c: "Router Working", s: "Internet Thinking", t: 'terminal' },
  { c: "One More Restart", s: "", t: 'sticky' },
  { c: "Coffee Finished", s: "Loading Continues", t: 'retro' },
  { c: "Weekend Gone", s: "Download 14%", t: 'error' },
  { c: "Mission Failed", s: "We'll Retry Tomorrow", t: 'terminal' },
  { c: "Wi-Fi Connected", s: "No Internet", t: 'warning' },
  { c: "Unplug Router", s: "Wait 10 Seconds", t: 'sticky' },
  { c: "Reconnecting in", s: "Forever", t: 'error' },
  { c: "Is It Me?", s: "Or The Internet?", t: 'minimal' },
  { c: "Airfel Magic", s: "Disappearing Speed", t: 'retro' },
  { c: "Data Exhausted", s: "Before Use", t: 'terminal' },
  { c: "Your Call Is", s: "Important To Us", t: 'sticky' },
  { c: "Resolution Time", s: "48 Hours", t: 'warning' },
  { c: "Fast. Reliable.", s: "Pick None.", t: 'minimal' },
  { c: "Error 502", s: "Bad Gateway", t: 'error' },
  { c: "Refreshing...", s: "Still Broken", t: 'terminal' },
  { c: "Press F5", s: "To Pray", t: 'sticky' },
];

export const generatePosters = (): PosterData[] => {
  return PHRASES.map((phrase, i) => ({
    id: i,
    type: phrase.t as PosterType,
    content: phrase.c,
    subcontent: phrase.s,
    // Scatter across grid to prevent clumping
    x: (Math.random() * 90) + 5, 
    y: (Math.random() * 90) + 5,
    rotate: (Math.random() * 40) - 20,
    scale: (Math.random() * 0.5) + 0.6,
    zIndex: Math.floor(Math.random() * 10),
    animationDelay: Math.random() * 5
  }));
};
