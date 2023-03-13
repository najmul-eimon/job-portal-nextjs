import FilterJob from '../shared/filterJob/FilterJob';

const JobBanner = () => {
  return (
    <section className="job-banner">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 offset-xl-1">
            <div className="text-center">
              <small className="explore-heading">Explore thousands of jobs in one place and get the job of your dream</small>
              <h1 className="main-heading"><span className="color">120</span> New <span className="border-text">Job</span> is Available Now</h1>
            </div>

            {/* Filter job area */}
            <FilterJob/>

            <div className="text-center">
              <p className="popular-search"><span>Popular Searches:</span> <a href="#!">Designer</a>,  <a href="#!">Web</a>, <a href="#!">IOS</a>, <a href="#!">Developer</a>, <a href="#!">PHP</a>, <a href="#!">Senior</a>, <a href="#!">Engineer</a>,</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobBanner;