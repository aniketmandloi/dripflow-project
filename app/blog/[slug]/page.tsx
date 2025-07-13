import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Make the component async
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Await the params
  const { slug } = await Promise.resolve(params);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-20">
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] w-full mb-12 rounded-xl overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">{post.description}</p>
            <p>
              This is a placeholder for the full blog post content. In a real
              application, this would be populated with the actual blog post
              content from your CMS or database.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
