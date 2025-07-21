import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { getBlogData } from "@/lib/getBlogData"; // ✅ Imported utility

const Blog = ({ blogs }) => {
  const allBlogs = blogs?.blogs || [];
  const pageSize = 4;

  const [blogList, setBlogList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const initialBlogs = allBlogs.slice(0, pageSize);
    setBlogList(initialBlogs);
    setCurrentIndex(pageSize);
  }, [blogs]); // ✅ Use blogs as the dependency

  const fetchData = () => {
    const nextBlogs = allBlogs.slice(currentIndex, currentIndex + pageSize);
    setBlogList((prev) => [...prev, ...nextBlogs]);
    setCurrentIndex((prev) => prev + pageSize);

    if (currentIndex + pageSize >= allBlogs.length) {
      setHasMore(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Latest Blogs</h2>

      <InfiniteScroll
        dataLength={blogList.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>The End! More Blogs Coming Soon!</b>
          </p>
        }
      >
        <div className={styles.grid}>
          {blogList.length > 0 ? (
            blogList.map((e, i) => (
              <Link key={i} href={`/blogpost/${e.slug}`} className={styles.card}>
                <h3>{e.title}</h3>
                <p>{e.excerpt}</p>
                <span className={styles.meta}>
                  📅 {e.date} • ⏱ {e.readTime}
                </span>
              </Link>
            ))
          ) : (
            <p>No blogs found.</p>
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export async function getStaticProps() {
  const blogs = await getBlogData(); // ✅ Use shared utility
  return {
    props: {
      blogs,
    },
  };
}

export default Blog;
