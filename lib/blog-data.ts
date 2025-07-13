import { images } from "./image-data";

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  readTime: string;
  date: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Email Marketing Trends That Will Define 2024",
    description:
      "Discover the latest email marketing trends that are shaping the industry and how you can leverage them to improve your campaigns.",
    category: "Marketing",
    imageUrl: images.blogPosts.emailTrends,
    readTime: "5 min read",
    date: "Mar 15, 2024",
    slug: "email-marketing-trends-2024",
  },
  {
    id: "2",
    title: "The Ultimate Guide to Email Automation",
    description:
      "Learn how to set up effective email automation workflows that nurture leads and drive conversions on autopilot.",
    category: "Automation",
    imageUrl: images.blogPosts.automation,
    readTime: "8 min read",
    date: "Mar 12, 2024",
    slug: "ultimate-guide-email-automation",
  },
  {
    id: "3",
    title: "How AI is Revolutionizing Email Marketing",
    description:
      "Explore how artificial intelligence is transforming email marketing and how businesses can stay ahead of the curve.",
    category: "AI",
    imageUrl: images.blogPosts.aiRevolution,
    readTime: "6 min read",
    date: "Mar 10, 2024",
    slug: "ai-revolutionizing-email-marketing",
  },
  {
    id: "4",
    title: "Writing Email Copy That Converts",
    description:
      "Master the art of writing compelling email copy that engages your audience and drives them to take action.",
    category: "Copywriting",
    imageUrl: images.blogPosts.emailCopy,
    readTime: "7 min read",
    date: "Mar 8, 2024",
    slug: "writing-email-copy-converts",
  },
  {
    id: "5",
    title: "Email Design Best Practices for 2024",
    description:
      "Stay up-to-date with the latest email design trends and best practices to create stunning newsletters that get results.",
    category: "Design",
    imageUrl: images.blogPosts.emailDesign,
    readTime: "6 min read",
    date: "Mar 5, 2024",
    slug: "email-design-best-practices-2024",
  },
  {
    id: "6",
    title: "Measuring Email Marketing Success",
    description:
      "Learn which metrics matter most and how to track them effectively to optimize your email marketing campaigns.",
    category: "Analytics",
    imageUrl: images.blogPosts.analytics,
    readTime: "5 min read",
    date: "Mar 3, 2024",
    slug: "measuring-email-marketing-success",
  },
];
