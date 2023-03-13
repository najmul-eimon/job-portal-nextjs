import {FiCheck} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import arrow from '../../../assets/images/svg/navigation-arrow.svg'

const SinglePrice = ({data}) => {
  const {title, monthlyAmount, yearlyAmount, postAmount, packages} = data;

  return (
    <div className="col-md-6 col-lg-4">
      <div className={`single-card ${title.toLowerCase() === 'standard' ? 'active' : ''}`}>
        <div className="card-title">
          <small>{title} plan</small>
          <h3><small>$</small>{monthlyAmount !== 0 ? monthlyAmount : postAmount}<span>/{monthlyAmount !== 0 ? 'mo' : 'Post'}</span></h3>
          <p>or {yearlyAmount === 0 ? 'free for one user' : `$${yearlyAmount} yearly`}</p>
        </div>

        <div className="card-content">
          <h5>Includes:</h5>
          <ul>
            {
              packages.map((item, index) => (
                <li key={index} className="d-flex align-items-center">
                  <FiCheck className='icon'/>
                  <p>{item}</p>
                </li>
              ))
            }
          </ul>
          <Link to="/pricing" className="animate-btn animate-btn-fill">
            <img src={arrow} alt="Arrow"/>
            Get started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SinglePrice