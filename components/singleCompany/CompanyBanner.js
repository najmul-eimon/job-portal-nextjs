import Image from 'next/image';
import {shareIcons} from '../../data/aboutUs';

const CompanyBanner = ({singleCompany}) => {
  const {image, name, location, about} = singleCompany;

  return (
    <section className="company-banner">
      {/* banner image */}
      <div className="banner-img">
        <Image src="/images/company-banner.jpg" alt="Banner" width={1920} height={600}/>
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
                      <Image src={image} alt="Logo" width={142} height={142}/>
                    </div>
                    <div className="company-name">
                      <h2>{name}</h2>
                      <span>
                        <Image src="/images/svg/map-pin.svg" alt="Map Icon" width={21} height={20}/>
                        {location}
                      </span>
                    </div>
                  </div>
                </div>
    
                <div className="col-md-3 col-lg-2">
                  <div className="contact-phn">
                    <a href="tel:123456789" className="contact-btn animate-btn animate-btn-fill">
                      <Image src="/images/svg/phone.svg" alt="Icon" width={24} height={24}/>
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
                            <Image src={icon} alt="Icon" width={24} height={24}/>
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