import { Link } from 'react-router-dom';

const SingleBlog = ({data, dataClass}) => {
  const {id, image, category, title, description, author, authorImg, date, time} = data;

  return (
    <div className={dataClass ? dataClass : ''}>
      <Link to={`/blog/${id}`} className="single-blog">
        <div className="image">
          <img src={image} alt="Blog"/>
        </div>

        <span>{category}</span>
        <h3>{title.length <= 50 ? title : `${title.substring(0,50)}...`}</h3>
        <p>{description?.introduction[0].length <= 180 ? description?.introduction[0] : `${description?.introduction[0].substring(0,180)}...`}</p>
        
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
      </Link>
    </div>
  )
}

export default SingleBlog;