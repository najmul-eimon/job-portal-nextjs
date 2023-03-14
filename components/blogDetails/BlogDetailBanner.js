import Image from "next/image";

const BlogDetailBanner = () => {
  return (
    <section className="blog-details-banner">
      <Image src="/images/blog-details-banner.png" alt="Banner" width={1920} height={600}/>
    </section>
  )
}

export default BlogDetailBanner;