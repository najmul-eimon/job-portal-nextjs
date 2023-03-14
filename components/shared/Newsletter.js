import Image from 'next/image';

const Newsletter = () => {
  return (
    <section className="job-newsletter section-gap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-7 col-md-6 col-xl-7">
            <h2>Find your dream job</h2>
            <p>Set up personalized remote job search alerts and get noticed by recruiters searching for your skills.</p>

            <form action="#!">
              <div className="form-filed">
                <input type="email" placeholder="Enter your email"/>
                <button type="submit" className="animate-btn animate-btn-fill">Subscribe</button>
              </div>
            </form>
          </div>

          <div className="col-sm-5 col-md-6 col-xl-5">
            <div className="text-end image">
              <Image src='/images/newsletter.png' alt="Newsletter" width={337} height={336}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter;