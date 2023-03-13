import mapIcon from '../../../assets/images/svg/map-large.svg';
import clockIcon from '../../../assets/images/svg/clock-grey.svg';

const Locations = () => {
  return (
    <div className="company-location">
      <div className="section-title">
        <h3>Company Location</h3>
      </div>
      <div className="map-card">
        <div className="map">
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d438.8143931912928!2d-0.1267466409927619!3d51.52589089656171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1676788897282!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
        </div>

        <ul>
          <li>
            <img src={mapIcon} alt="Icon"/>
            <div>
              <span>Company field</span>
              <p>Technology</p>
            </div>
          </li>
          <li>
            <img src={mapIcon} alt="Icon"/>
            <div>
              <span>Location</span>
              <p>L/36, S/1, Down street, New York, USA</p>
            </div>
          </li>
          <li>
            <img src={clockIcon} alt="Icon"/>
            <div>
              <span>Member since</span>
              <p>Jul 2018</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Locations;