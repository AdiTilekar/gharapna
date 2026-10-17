import { Metadata } from 'next';
import { getAllBlogPosts } from '@/data/blogs';
import { BlogListClient } from '@/components/blog/BlogListClient';
import { Section, PageHeader } from '@/components/ui/minimal';

export const metadata: Metadata = {
  title: 'PCMC Real Estate Guides & Buyer Advice | Gharapna',
  description:
    'Honest, research-backed guides on buying flats in Pimpri-Chinchwad (PCMC), Pune. Learn how to verify MahaRERA documents, compare corridors like Wakad and Ravet, and understand all-inclusive costs.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <Section size="wide" spacing="default">
      <div className="space-y-10">
        <PageHeader
          prefix="Homebuyer Guides &amp;"
          accent="research"
          suffix="for PCMC"
          subtitle="Unvarnished market insights, corridor comparisons, and step-by-step regulatory due diligence for buyers across Pimpri-Chinchwad, Pune. No marketing hype, no sponsored bias."
        />

        <BlogListClient initialPosts={posts} />
      </div>
    </Section>
  );
}
