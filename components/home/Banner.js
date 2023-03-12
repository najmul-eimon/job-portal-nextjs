import { bannerBg } from '@/public/images/svg/banner';
import FilterJob from '../shared/filterJob/FilterJob';

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 offset-xl-1">
            <div className="text-center">
              <small className="explore-heading">Explore thousands of jobs in one place and get the job of your dream</small>
              <h1 className="main-heading">The <span className="color">Easiest</span> Way to Get Your <br/> <span className="border-text">New Job</span></h1>
            </div>

            {/* filter job area */}
            <FilterJob/>

            <div className="text-center">
              <p className="popular-search"><span>Popular Searches:</span> <a href="#!">Designer</a>,  <a href="#!">Web</a>, <a href="#!">IOS</a>, <a href="#!">Developer</a>, <a href="#!">PHP</a>, <a href="#!">Senior</a>, <a href="#!">Engineer</a>,</p>
            </div>
          </div>
        </div>
      </div>
      {bannerBg}
    </section>
  )
}

export default Banner;