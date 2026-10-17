import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllBlogPosts, getBlogPostBySlug } from '@/data/blogs';
import { MarkdownContent } from '@/components/blog/MarkdownContent';
import { Calendar, Clock, User, ArrowLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section, PageHeader, Card, PrimaryButton } from '@/components/ui/minimal';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Guide Not Found | Gharapna',
    };
  }

  return {
    title: `${post.title} | Gharapna`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const titleWords = post.title.split(' ');
  const prefix = titleWords.length > 2 ? titleWords.slice(0, 2).join(' ') : '';
  const accent = titleWords.length > 2 ? titleWords[2] : titleWords[0];
  const suffix = titleWords.length > 2 ? titleWords.slice(3).join(' ') : titleWords.slice(1).join(' ');

  return (
    <Section size="standard" spacing="default">
      <article className="space-y-10 font-sans">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-muted"
        >
          <Link href="/" className="hover:text-foreground transition">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-muted" />
          <Link href="/blog" className="hover:text-foreground transition">
            Research &amp; Guides
          </Link>
          <ChevronRight className="w-3 h-3 text-muted" />
          <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-md">
            {post.title}
          </span>
        </nav>

        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="font-semibold text-foreground">{post.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          <PageHeader
            prefix={prefix}
            accent={accent}
            suffix={suffix}
          />

          <div className="flex items-center gap-3 pt-2 text-xs text-muted border-t border-border">
            <span>By {post.author.name} ({post.author.role})</span>
            <span>•</span>
            <span>{post.publishedAt}</span>
          </div>
        </div>

        {/* Article Body */}
        <Card className="p-8 sm:p-12">
          <MarkdownContent content={post.content} />

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider">
              Topics:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs border border-border text-muted font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </Card>

        {/* Bottom Back Button */}
        <div className="flex items-center justify-between pt-2">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-coral-start transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Guides</span>
          </Link>
        </div>
      </article>
    </Section>
  );
}
