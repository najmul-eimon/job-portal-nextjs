import {blogs} from '@/data/blog';
import FeaturedBlogCard from './FeaturedBlogCard';

const FeaturedBlog = () => {
  const featuredBlog = blogs.find((blog) => blog.status === 'featured');

  return (
    <section className="featured-blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/*  title */}
            <div className="section-title">
              <h3>Featured</h3>
            </div>

            {/*  blog card */}
            <FeaturedBlogCard featuredBlog={featuredBlog} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBlog