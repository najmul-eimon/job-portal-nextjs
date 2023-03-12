import {HiArrowRight} from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const SingleLocationCard = ({data}) => {
  const {status, image, location, vacancy, company} = data;

  return (
    <div className="item">
      <div className="image">
        <span>{status}</span>
        <img src={image} alt="Location"/>
      </div>
      <h3>{location}</h3>
      <p>
        <span>{vacancy} vacancy</span>
        <span>{company} Company</span>
      </p>
      <Link to="/job">See More <HiArrowRight className='icons'/></Link>
    </div>
  )
}

export default SingleLocationCard;