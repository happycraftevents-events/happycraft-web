export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  event: string;
  location: string;
  year?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/gallery/g9.jpg",
    alt: "Luxury Wedding in Kolkata",
    category: "Wedding Planning",
    event: "Royal Wedding Ceremony",
    location: "Jaipur",
  },
  {
    id: 2,
    src: "home/expertise/e2.jpg",
    alt: "Product Launch Event in Bengaluru",
    category: "Product Launch",
    event: "Product Launch Gala",
    location: "Kolkata",
  },
  {
    id: 3,
    src: "/gallery/g3.jpg",
    alt: "Celebrity Showcase in Pune",
    category: "Artist Management",
    event: "Celebrity Showcase",
    location: "Pune",
  },
  {
    id: 4,
    src: "/gallery/g1.jpg",
    alt: "Strategic Growth Conference",
    category: "Corporate Events",
    event: "Strategic Growth Conference",
    location: "Bengaluru",
  },
  {
    id: 5,
    src: "/gallery/g4.jpg",
    alt: "Artist Performance at Corporate Event",
    category: "Artist Management",
    event: "Live Performance by Renowned Artists",
    location: "Mumbai",
  },
  {
    id: 6,
    src: "home/hanger/h4.jpg",
    alt: "Corporate Seminar with Elegant Setup",
    category: "Corporate Events",
    event: "Professional Seminar Setup with Engaged Audience",
    location: "New Delhi",
  },

  {
    id: 7,
    src: "/gallery/g6.jpg",
    alt: "Live Artist Performance with Dynamic Stage Lighting",
    category: "Artist Management",
    event: "Bollywood Night",
    location: "Hyderabad",
  },
  {
    id: 8,
    src: "/gallery/g5.jpg",
    alt: "Pre-Wedding Shoot",
    category: "Pre-Wedding Shoot",
    event: "Pre-Wedding Shoot",
    location: "Kolkata",
  },

  {
    id: 9,
    src: "/gallery/g10.jpg",
    alt: "Grand Wedding Celebration with Elegant Indoor Decor",
    category: "Wedding Planning",
    event: "Luxury Indoor Wedding Celebration",
    location: "Mumbai",
  },
];

export const galleryCategories = [
  "All",
  "Wedding Planning",
  "Pre-Wedding Shoots",
  "Corporate Events",
  "Conferences & Seminars",
  "Product Launches",
  "Artist Management",
];
