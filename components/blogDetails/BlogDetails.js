import Image from 'next/image';
import { shareIcons } from '../../data/aboutUs';

const BlogDetails = ({singleBlog}) => {
  const {title, author, authorImg, date, time, image, description, tags} = singleBlog;

  return (
    <section className="blog-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* blog title */}
            <h2>{title}</h2>

            {/* blog author */}
            <div className="blog-author">
              <div className="author">
                <Image src={authorImg} alt="Avatar" width={40} height={40}/>
              </div>
              <div>
                <h4>{author}</h4>
                <ul>
                  <li><small>{date}</small></li>
                  <li><small>{time} read</small></li>
                </ul>
              </div>
            </div>

            {/* introduction */}
            <h3>Introduction</h3>
            <p>{description?.introduction[0]}</p>
            
            <div className="blog-image">
              <div className="row align-items-center row-gutter">
                <div className="col-md-6 col-lg-7">
                  <blockquote className="varient1">{description?.introduction[1]}</blockquote>
                </div>
                <div className="col-md-6 col-lg-5">
                  <figure>
                    <Image src={image} alt="Blog Details" width={324} height={232}/>
                    <figcaption>Image caption goes here</figcaption>
                  </figure>
                </div>
              </div>
            </div>

            {/* blockquote */}
            <blockquote className="varient2">{description?.introduction[2]}</blockquote>
            <p>{description?.introduction[3]}</p>
          
            <blockquote className="varient3">&quote;{description?.introduction[4]}&quote;</blockquote>
            <p>{description?.introduction[5]}</p>
            
            {/* Conclusion */}
            <h3>Conclusion</h3>
            {description?.concliusion.map((item, index) => <p key={index}>{item}</p>)}


            <div className="share">
              <div className="row align-items-end">
                {/* share this post */}
                <div className="col-md-6 order-2 order-md-1">
                  <div className="share-post">
                    <h4>Share this post</h4>
                    <ul>
                      {
                        shareIcons.map(({id, icon}) => (
                          <li key={id}>
                            <a href="#!">
                              <img src={icon} alt="Icon"/>
                            </a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
  
                {/* tags */}
                <div className="col-md-6 order-1 order-md-2">
                  <ul className="d-flex align-items-center tags">
                    {
                      tags?.map((tag, i) => <li key={i}><a href="#!">{tag}</a></li>)
                    }
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogDetails;