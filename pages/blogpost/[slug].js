import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/BlogPost.module.css";
import Head from "next/head";
import path from 'path';
import { promises as fs } from 'fs';
import Link from "next/link";

const BlogPost = ({ blog, error }) => {
  const router = useRouter();
  
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (error || !blog) {
    return (
      <div className={styles.errorContainer}>
        <h1 className={styles.error}>Blog not found</h1>
        <Link href="/blog">Go Back</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{blog.title} | Hunting Coder</title>
      </Head>
      <article>
        <h1 className={styles.title}>{blog.title}</h1>
        <div className={styles.content}>
          {blog.content}
        </div>
      </article>
    </div>
  );
};

export async function getStaticPaths() {
  const jsonDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(path.join(jsonDirectory, 'blog.json'), 'utf8');
  const blogs = JSON.parse(fileContents);
  
  // Ensure blogs is an array and has items
  const blogList = Array.isArray(blogs.blogs) ? blogs.blogs : Array.isArray(blogs) ? blogs : [];
  
  const paths = blogList.map((blog) => ({
    params: { slug: blog.slug }
  }));

  return {
    paths,
    fallback: true, // Changed to true to handle new slugs
  };
}

export async function getStaticProps({ params }) {
  try {
    const { slug } = params;
    const jsonDirectory = path.join(process.cwd(), 'data');
    const fileContents = await fs.readFile(path.join(jsonDirectory, 'blog.json'), 'utf8');
    const blogs = JSON.parse(fileContents);
    
    // Handle both { blogs: [...] } and direct array formats
    const blogList = Array.isArray(blogs.blogs) ? blogs.blogs : Array.isArray(blogs) ? blogs : [];
    const blog = blogList.find((b) => b.slug === slug);

    if (!blog) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        blog,
      },
      revalidate: 60, // Optional: ISR to update content
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default BlogPost;