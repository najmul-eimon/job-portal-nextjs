import Image from 'next/image';
import {companies} from '../../../data/company';

const SingleJob = ({data}) => {
  const {companyId, title, publish, type, description, tags, rate} = data;
  const singleCompany = companies.find((company) => company.id === companyId);

  return (
    <div className="col-md-6 col-lg-4">
      <div className="single-job">

        {/* card title */}
        <div className="d-flex align-items-center card-title">
          <div className="icon">
            <Image src={singleCompany?.image} alt="Icon" width={142} height={142} />
          </div>
          <div>
            <h3>{singleCompany?.name}</h3>
            <span>
              <Image src="images/svg/map-trifold.svg" alt="Icon" width={20} height={21}/>
              {singleCompany?.location}
            </span>
          </div>
        </div>

        {/* job description */}
        <div className="job-title">
          <h4>{title}</h4>
          <ul className="d-flex align-items-center">
            <li className="d-flex align-items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" d="M17.5 12.5V16.25C17.5 16.4158 17.4342 16.5747 17.3169 16.6919C17.1997 16.8092 17.0408 16.875 16.875 16.875H3.125C2.95924 16.875 2.80027 16.8092 2.68306 16.6919C2.56585 16.5747 2.5 16.4158 2.5 16.25V12.5" fill="#0075C8"/>
                <path d="M16.875 5.625H3.125C2.77982 5.625 2.5 5.90482 2.5 6.25V16.25C2.5 16.5952 2.77982 16.875 3.125 16.875H16.875C17.2202 16.875 17.5 16.5952 17.5 16.25V6.25C17.5 5.90482 17.2202 5.625 16.875 5.625Z" stroke="#0075C8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.125 5.625V4.375C13.125 4.04348 12.9933 3.72554 12.7589 3.49112C12.5245 3.2567 12.2065 3.125 11.875 3.125H8.125C7.79348 3.125 7.47554 3.2567 7.24112 3.49112C7.0067 3.72554 6.875 4.04348 6.875 4.375V5.625" stroke="#0075C8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.5 12.5H17.5" stroke="#0075C8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              {type}
            </li>
            <li className="d-flex align-items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" fill="#0075C8"/>
                <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#0075C8" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path d="M10 5.625V10H14.375" stroke="#0075C8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              {publish}
            </li>
          </ul>
        </div>

        <p className="desc">{description.length <= 150 ? description : `${description.substring(0,150)}...`}</p>
        <ul className="d-flex align-items-center tags">
          {
            tags?.map((tag, index) => <li key={index}><a href="#!">{tag}</a></li>)
          }
        </ul>

        <div className="card-footer d-flex align-items-center justify-content-between">
          <button type="button">Apply now</button>
          <p>${rate} <span>/Hour</span></p>
        </div>
      </div>
    </div>
  )
}

export default SingleJob;