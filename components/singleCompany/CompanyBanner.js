import banner from '../../assets/images/company-banner.jpg';
import mapPin from '../../assets/images/svg/map-pin.svg';
import phone from '../../assets/images/svg/phone.svg';
import {shareIcons} from '../../data/aboutUs';

const CompanyBanner = ({singleCompany}) => {
  const {image, name, location, about} = singleCompany;

  return (
    <section className="company-banner">
      {/* banner image */}
      <div className="banner-img">
        <img src={banner} alt="Banner"/>
      </div>

      {/* about company */}
      <div className="about-company">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-12">
              <div className="row align-items-center">
                <div className="col-md-9 col-lg-10">
                  <div className="heading">
                    <div className="logo">
                      <img src={image} alt="Logo"/>
                    </div>
                    <div className="company-name">
                      <h2>{name}</h2>
                      <span>
                        <img src={mapPin} alt="Map Icon"/>
                        {location}
                      </span>
                    </div>
                  </div>
                </div>
    
                <div className="col-md-3 col-lg-2">
                  <div className="contact-phn">
                    <a href="tel:123456789" className="contact-btn animate-btn animate-btn-fill">
                      <img src={phone} alt="Icon"/>
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="about-part">
                <h3>About Company</h3>
                <p>{about}</p>
                <div className="share-post">
                  <h4>Share this post</h4>
                  <ul>
                    {
                      shareIcons.map(({id, icon}) => (
                        <li key={id}>
                          <a href="#!">
                            <img src={icon} alt="Icon"/>
                          </a>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyBanner;