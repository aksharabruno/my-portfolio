import blogPosts from "../data/blogPosts";
import { FadeUpElement } from "./fadeUpElement";
import { BasicTypewriter } from "./typewriter";
import Image from "next/image";
import Link from "next/link";

type BlogItemProps = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  imageName: string;
};

function BlogItem({ title, slug, excerpt, imageName }: BlogItemProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="relative group overflow-hidden shadow-lg">
        <Image
          src={imageName}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-header font-bold mb-2">{title}</h3>
            <p className="text-body text-sm text-gray-200">{excerpt}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function BlogGrid({ isSmallWindow }: any) {
  return (
    <FadeUpElement
      children={
        <>
          <div className="flex flex-col md:flex-row bg-background m-8 p-6">
            {isSmallWindow ? (
              <div className="text-center text-highlight text-xl mx-4 my-6">
                <BasicTypewriter text="Here's what I'm thinking" />
              </div>
            ) : (
              <></>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:min-w-3/4">
              {blogPosts.map(
                (
                  item: {
                    id: number;
                    title: string;
                    slug: string;
                    excerpt: string;
                    imageName: any;
                  },
                  index: number
                ) => (
                  <BlogItem
                    key={index}
                    id={item.id}
                    title={item.title}
                    slug={item.slug}
                    excerpt={item.excerpt}
                    imageName={item.imageName}
                  />
                )
              )}
            </div>
            {!isSmallWindow ? (
              <div className="text-center text-highlight text-right lg:text-5xl md:text-4xl mx-4 my-10">
                <BasicTypewriter text="Here's what I'm thinking" />
              </div>
            ) : (
              <></>
            )}
          </div>
        </>
      }
    />
  );
}
