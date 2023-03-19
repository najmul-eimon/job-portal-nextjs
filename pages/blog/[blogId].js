import BlogDetailBanner from "@/components/blogDetails/BlogDetailBanner";
import BlogDetails from "@/components/blogDetails/BlogDetails";
import Head from "next/head";
import { blogs } from "@/data/blog";
import Blog from "@/components/shared/blog/Blog";

const BlogDetailsPage = ({singleBlog}) => {

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
      
      <BlogDetailBanner/>
      <BlogDetails singleBlog={singleBlog}/>
      <Blog dataClass="blog-details-blog"/>
    </>
  )
}

export default BlogDetailsPage;

export const getStaticProps = async ({params}) => {
  const data = blogs.find(({id}) => id === params.blogId);

  return{
    props: {
      singleBlog: data
    }
  }
}

export const getStaticPaths = async () => {
  const paths = blogs.map((blog) => {
    return {
      params: {
        blogId: blog.id
      }
    }
  })

  return {paths, fallback: false}
}