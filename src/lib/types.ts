export interface Club {
  id: string;
  name: string;
  location: string;
  type: string[];
  description: string;
  website: string;
  facebook: string;
  strava: string;
  contact: string;
  meetingPoint: string;
  featured: boolean;
}

export interface Event {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  startTime: string;
  location: string;
  type: string;
  distance: string;
  club: string;
  description: string;
  link: string;
  featured: boolean;
}
