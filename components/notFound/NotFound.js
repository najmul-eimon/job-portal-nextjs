import { Link } from 'react-router-dom'
import fourOne from '../../assets/images/svg/4a.svg'
import fourTwo from '../../assets/images/svg/4b.svg'
import {notFoundBanner, buildingBg} from '../../assets/images/svg/notFound';

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content text-center">
              <h2>Page Not Found</h2>
              <p>It's Seem that this was lost. sorry...</p>
              <Link to="/" className="animate-btn animate-btn-outline">
                <i className="ph-arrow-u-up-left"></i>
                Back to home
              </Link>
            </div>
            <div className="box d-flex align-items-center justify-content-between">
              <img className="four four-one" src={fourOne} alt="Four"/>
              <div className="sun-mobile"></div>
              <img className="four four-two" src={fourTwo} alt="Four"/>
            </div>
          </div>
        </div>
      </div>

      {/* bg */}
      <div className="shadow-sun-box">
        <div className="shadow-sun"></div>
      </div>

      {notFoundBanner}
      {buildingBg}

    </section>
  )
}

export default NotFound