import {HiArrowRight} from 'react-icons/hi2';
import Link from 'next/link';
import Image from 'next/image';

const SingleLocationCard = ({data}) => {
  const {status, image, location, vacancy, company} = data;

  return (
    <div className="item">
      <div className="image">
        <span>{status}</span>
        <Image src={image} alt="Location" width={428} height={232}/>
      </div>
      <h3>{location}</h3>
      <p>
        <span>{vacancy} vacancy</span>
        <span>{company} Company</span>
      </p>
      <Link href="/job">See More <HiArrowRight className='icons'/></Link>
    </div>
  )
}

export default SingleLocationCard;