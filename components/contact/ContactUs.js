import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <section className="contact section-gap">
      <div className="container">
        <div className="row row-gutter">
          <div className="col-lg-6">
            <div className="section-title">
              <h2>Contact us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <form action="#!">
              <div className="input-box">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="inputs"/>
              </div>

              <div className="input-box">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="inputs"/>
              </div>

              <div className="input-box">
                <label htmlFor="msg">Message</label>
                <textarea id="msg" placeholder="Type your message..." className="inputs"></textarea>
              </div>

              <div className="input-box input-check-box">
                <label htmlFor="chk" className="check-container">
                  <input type="checkbox" className="input-check" id="chk"/>
                  <span className="checkmark"></span>
                  <span>I accept the <Link to="/">Terms</Link></span>
                </label>
              </div>

              <div className="input-box">
                <button type="submit" className="animate-btn animate-btn-fill">Submit</button>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <div className="map-card">
              <iframe className="map" title="contactMap" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d438.8143931912928!2d-0.1267466409927619!3d51.52589089656171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1676788897282!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs;