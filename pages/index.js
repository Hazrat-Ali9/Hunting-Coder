import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import blogstyles from "@/styles/Blog.module.css";
import { getBlogData } from "@/lib/getBlogData";
import Link from "next/link";

export default function Home({ blogs }) {
  const allBlogs = blogs?.blogs || [];
  const limitedBlogs = allBlogs.slice(0, 3); // ✅ Show only first 3 blogs

  return (
    <>
      <Head>
        <title>Hunting Coder | Developer Blog</title>
        <meta name="description" content="A blog for hunting coders by a hunting coder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.img}>
          <Image 
            className={styles.myImg} 
            src="/hero.jpg" 
            width={600} 
            height={400} 
            alt="Coding hero image"
            priority
          />
        </div>
        
        <h1 className={styles.title}>Hunting Coder</h1>
        
        <p className={styles.subtitle}>
          Exploring the world of code, one bug at a time.
        </p>
        
        <div className={styles.blogContainer}>
          <h2 className={blogstyles.heading}>Recent Blogs</h2>
          <div className={blogstyles.grid}>
            {limitedBlogs.length > 0 ? (
              limitedBlogs.map((e, i) => (
                <Link key={i} href={`/blogpost/${e.slug}`} className={blogstyles.card}>
                  <h3>{e.title}</h3>
                  <p>{e.excerpt}</p>
                  <span className={blogstyles.meta}>
                    📅 {e.date} • ⏱ {e.readTime}
                  </span>
                </Link>
              ))
            ) : (
              <p>No blogs found.</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const blogs = await getBlogData();
  return {
    props: {
      blogs,
    },
  };
}
