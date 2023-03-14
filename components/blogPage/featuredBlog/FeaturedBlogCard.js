import Image from 'next/image';
import Link from 'next/link';

const FeaturedBlogCard = ({featuredBlog}) => {
  const {id, image, category, title, description, author, authorImg, date, time} = featuredBlog;

  return (
    <Link href={`/blog/${id}`} className="blog-card">
      <div className="image">
        <Image src={image} alt="Blog" width={546} height={404}/>
      </div>

      <div>
        <span>{category}</span>
        <h3>{title}</h3>
        <p>{description.introduction.slice(0,1)[0].length <= 160 ? description.introduction.slice(0,1)[0] : `${description.introduction.slice(0,1)[0].substring(0,160)}...`}</p>
        <div className="blog-author">
          <div className="author">
            <Image src={authorImg} alt="Avatar" width={41} height={40}/>
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