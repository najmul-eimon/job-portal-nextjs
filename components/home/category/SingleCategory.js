import {HiArrowRight} from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const SingleCategory = ({data}) => {
  const {tag, image, title, description} = data;

  return (
    <div className="col-sm-6 col-lg-4 col-xl-3">
      <div className="single-category">
        <div className="image">
          <span>{tag}</span>
          <img src={image} alt="Category"/>
        </div>
        <h3>{title}</h3>
        <p>{description.length <= 40 ? description : `${description.substring(0,40)}...`}</p>
        <Link to="/job">More <HiArrowRight/></Link>
      </div>
    </div>
  )
}

export default SingleCategory;