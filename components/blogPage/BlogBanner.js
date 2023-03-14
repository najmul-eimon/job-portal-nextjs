import { blogBanner } from '@/public/images/svg/blogBanner';

const BlogBanner = () => {
  return (
    <section className="blog-banner">
      <div className="container">
        <div className="row">
          <div className="content">
            <small>Blog</small>
            <h2>Articles <span>/</span> News</h2>
            <p>Get the latest news, updates and tips</p>

            <form action="#!">
              <div className="form-filed">
                <input type="text" placeholder="Search article, news or recipe..."/>
                <button type="submit" className="animate-btn animate-btn-fill">Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {blogBanner}
    </section>
  )
}

export default BlogBanner;