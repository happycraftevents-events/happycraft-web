export interface Testimonial {
  id: number;
  name: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    content:
      "HappyCraft Events transformed our annual conference into an unforgettable experience. Their attention to detail and professional execution exceeded our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    content:
      "The team at HappyCraft Events delivered a flawless product launch event. Every aspect was perfectly coordinated, from venue setup to guest management.",
    rating: 4,
  },
  {
    id: 3,
    name: "Amit Patel",
    content:
      "Outstanding service and creativity! They brought our vision to life and created an event that our guests are still talking about months later.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Reddy",
    content: "Loved the decorations and overall vibe. Simple yet classy!",
    rating: 4,
  },
  {
    id: 5,
    name: "Vikram Singh",
    content:
      "Professional and reliable team. Everything was smooth from start to finish.",
    rating: 5,
  },
  {
    id: 6,
    name: "Ananya Iyer",
    content:
      "Good experience overall. A few things could have been faster, but the end result was great.",
    rating: 3,
  },
  {
    id: 7,
    name: "Rohit Mehta",
    content:
      "They handled everything so well, I didn’t have to worry about a single detail. Highly recommend their services!",
    rating: 5,
  },
];
