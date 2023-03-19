import AllBlogs from "@/components/blogPage/AllBlogs"
import BlogBanner from "@/components/blogPage/BlogBanner"
import FeaturedBlog from "@/components/blogPage/featuredBlog/FeaturedBlog"
import Newsletter from "@/components/shared/Newsletter"
import Head from "next/head"

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Job Portal | Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&display=swap" rel="stylesheet"/>
      </Head>
      
      <BlogBanner/>
      <section className="section-gap">
        <FeaturedBlog/>
        <AllBlogs/>
      </section>
      <Newsletter/>
    </>
  )
}

export default BlogPage