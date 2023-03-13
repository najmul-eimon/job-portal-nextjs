import { Link } from 'react-router-dom';

const FeaturedBlogCard = ({featuredBlog}) => {
  const {id, image, category, title, description, author, authorImg, date, time} = featuredBlog;

  return (
    <Link to={`/blog/${id}`} className="blog-card">
      <div className="image">
        <img src={image} alt="Blog"/>
      </div>

      <div>
        <span>{category}</span>
        <h3>{title}</h3>
        <p>{description.introduction.slice(0,1)[0].length <= 160 ? description.introduction.slice(0,1)[0] : `${description.introduction.slice(0,1)[0].substring(0,160)}...`}</p>
        <div className="blog-author">
          <div className="author">
            <img src={authorImg} alt="Avatar"/>
          </div>
          <div>
            <h4>{author}</h4>
            <ul>
              <li><small>{date}</small></li>
              <li><small>{time} read</small></li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FeaturedBlogCard;