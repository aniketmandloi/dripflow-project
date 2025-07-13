import { Badge } from "@/components/ui/badge";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/lib/blog-data";
import { Book } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="mb-8 bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500/20 transition-colors">
            <Book className="w-4 h-4 mr-2" />
            DripFlow Blog
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Insights for{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Smart Email Marketing
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert tips, guides, and strategies to help you master email
            marketing and grow your business.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
