"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Globe } from "lucide-react";
import Image from "next/image";
import { images } from "@/lib/image-data";

// Mock data for newsletter examples using blog images
const newsletterExamples = [
  {
    id: 1,
    title: "TechCrunch Weekly",
    website: "techcrunch.com",
    description: "Latest tech news and startup updates, curated for your inbox",
    imageUrl: images.newsletters.tech,
    category: "Technology",
    rating: 4.9,
    reviews: 128,
  },
  {
    id: 2,
    title: "Design Digest",
    website: "designdigest.co",
    description: "Weekly inspiration for designers and creative professionals",
    imageUrl: images.newsletters.design,
    category: "Design",
    rating: 4.8,
    reviews: 95,
  },
  {
    id: 3,
    title: "Business Insider Pro",
    website: "businessinsider.com",
    description: "Daily business insights and market analysis",
    imageUrl: images.blogPosts.automation,
    category: "Business",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    title: "The Daily Brief",
    website: "thedailybrief.news",
    description: "Your morning news briefing, perfectly summarized",
    imageUrl: images.blogPosts.aiRevolution,
    category: "News",
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 5,
    title: "Product Hunt Daily",
    website: "producthunt.com",
    description: "Best new products, every day",
    imageUrl: images.blogPosts.emailCopy,
    category: "Technology",
    rating: 4.8,
    reviews: 167,
  },
  {
    id: 6,
    title: "Marketing Weekly",
    website: "marketingweekly.com",
    description: "Latest marketing trends and strategies",
    imageUrl: images.newsletters.marketing,
    category: "Marketing",
    rating: 4.7,
    reviews: 142,
  },
];

export const NewsletterGallery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  console.log(hoveredId);

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="mb-8 bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 transition-colors">
            <Globe className="w-4 h-4 mr-2" />
            Featured Newsletters
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            From Website to{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Newsletter
            </span>{" "}
            in Seconds
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how leading websites are transformed into engaging
            newsletters using DripFlow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsletterExamples.map((example) => (
            <Card
              key={example.id}
              className="group relative overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300"
              onMouseEnter={() => setHoveredId(example.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={example.imageUrl}
                  alt={example.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <Badge
                  className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm"
                  variant="secondary"
                >
                  {example.category}
                </Badge>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {example.title}
                  </h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm text-foreground">
                      {example.rating}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {example.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Globe className="w-4 h-4 mr-2" />
                    {example.website}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {example.reviews} reviews
                  </span>
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}
                >
                  <Button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700">
                    Try This Template
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700"
          >
            View All Examples
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
