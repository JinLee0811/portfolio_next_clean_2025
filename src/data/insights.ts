export interface Insight {
  slug: string;
  emoji: string;
  tag: string;
  title: string;
  excerpt: string;
  paragraphs: string[];
}

export const insights: Insight[] = [
  {
    slug: "restaurant-reviews-stars",
    emoji: "🍽️",
    tag: "Restaurant Reviews",
    title: "Does a higher star rating mean tastier food?",
    excerpt:
      "While building an AI review summarizer, I checked how ratings align with sentiment in text. Ratings reflect the whole experience, not just taste.",
    paragraphs: [
      "While building an AI review summarizer, I checked how ratings align with sentiment in text.",
      "Interestingly, restaurants rated ★4.5+ mentioned “service friendliness” most.",
      "Ratings reflect the whole experience, not just taste.",
    ],
  },
  {
    slug: "sunset-colors-weather",
    emoji: "🌅",
    tag: "Sunset Colors",
    title: "Why do sunsets change color by weather?",
    excerpt:
      "Comparing sunset photos with weather: clear days scatter shorter wavelengths (blue), dusty days amplify longer wavelengths (red). A pretty sunset is physics showing up.",
    paragraphs: [
      "Comparing sunset photos with weather, clear days scatter shorter wavelengths (blue).",
      "Dusty days amplify longer wavelengths (red).",
      "A pretty sunset is just physics showing up.",
    ],
  },
  {
    slug: "youtube-subscribers-vs-views",
    emoji: "📺",
    tag: "YouTube API Pipeline",
    title: "Subscribers ≠ Views",
    excerpt:
      "Ingesting creator data via API showed subscriber count weakly correlates with views. Upload cadence, short-form ratio, and 30-day retention explained views better.",
    paragraphs: [
      "While ingesting creator data via API, subscriber count correlated weakly with views.",
      "Upload cadence, short-form ratio, and 30-day retention explained views better.",
      "Views follow habits, not just fan counts.",
    ],
  },
  {
    slug: "travel-reviews-cleanliness",
    emoji: "🧭",
    tag: "Travel Reviews",
    title: "The most common word from travelers?",
    excerpt:
      "Embedding tens of thousands of reviews, “clean” appeared more than any food word. Travelers prioritize cleanliness before cuisine. Data stays honest.",
    paragraphs: [
      "Embedding tens of thousands of reviews, “clean” appeared more than any food word.",
      "Travelers prioritize cleanliness before cuisine.",
      "Data stays honest.",
    ],
  },
];

