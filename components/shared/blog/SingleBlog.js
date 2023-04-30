import Image from 'next/image';
import Link from 'next/link';

const SingleBlog = ({data, dataClass}) => {
  const {id, image, category, title, description, author, authorImg, date, time} = data;

  return (
    <div className={dataClass ? dataClass : ''}>
      <Link href={`/blog/${id}`} className="single-blog">
        <div className="image">
          <Image src={image} alt="Blog"width={324} height={232} />
        </div>

        <span>{category}</span>
        <h3>{title.length <= 55 ? title : `${title.substring(0,55)}...`}</h3>
        <p>{description?.introduction[0].length <= 180 ? description?.introduction[0] : `${description?.introduction[0].substring(0,180)}...`}</p>
        
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
      </Link>
    </div>
  )
}

export default SingleBlog;