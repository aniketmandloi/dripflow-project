import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogPostProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  readTime: string;
  date: string;
  slug: string;
}

export const BlogCard = ({
  title,
  description,
  category,
  imageUrl,
  readTime,
  date,
  slug,
}: BlogPostProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/50">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm">
          {category}
        </Badge>
      </div>
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
        <Link href={`/blog/${slug}`} className="group/title">
          <h3 className="text-xl font-semibold leading-tight group-hover/title:text-purple-500 transition-colors">
            {title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground line-clamp-2">{description}</p>
        <Link href={`/blog/${slug}`}>
          <Button variant="ghost" className="p-0 h-auto font-medium">
            Read More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
