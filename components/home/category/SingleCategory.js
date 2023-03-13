import {HiArrowRight} from 'react-icons/hi2';
import Link from 'next/link';
import Image from 'next/image';

const SingleCategory = ({data}) => {
  const {tag, image, title, description} = data;

  return (
    <div className="col-sm-6 col-lg-4 col-xl-3">
      <div className="single-category">
        <div className="image">
          <span>{tag}</span>
          <Image src={image} alt="Category" width={237} height={206}/>
        </div>
        <h3>{title}</h3>
        <p>{description.length <= 40 ? description : `${description.substring(0,40)}...`}</p>
        <Link href="/job">More <HiArrowRight/></Link>
      </div>
    </div>
  )
}

export default SingleCategory;