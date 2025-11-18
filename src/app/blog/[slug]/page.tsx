import blogPosts from "@/app/data/blogPosts";
import Image from "next/image";
import Dot from "@/app/components/animata/background/dot";

async function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogPost = await getBlogPostBySlug(slug);

  if (!blogPost) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
      </div>
    );
  }

  return (
    <Dot>
      <>
        <div className="fade-in-website p-4 min-h-[100vh]">
          <article className="max-w-4xl mx-auto p-6 my-12">
            <h1 className="text-4xl font-bold mb-8 text-highlight">
              {blogPost.title}
            </h1>
            <div className="flex flex-col items-center justify-center">
              <Image
                src={blogPost.imageName}
                alt={blogPost.title}
                className="w-auto h-auto my-8"
              />
            </div>

            <div className="prose prose-lg max-w-none text-body">
              {blogPost.content.map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </>
    </Dot>
  );
}
