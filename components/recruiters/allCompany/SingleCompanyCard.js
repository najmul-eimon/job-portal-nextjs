import Image from 'next/image';
import Link from 'next/link';

const SingleCompanyCard = ({data}) => {
  const {id, name, image, location, jobs} = data;

  return (
    <div className="col-md-6 col-lg-4">
      <div className="single-company">
        {/* company title */}
        <div className="company-title text-center">
          <div className="icon">
            <Image src={image} alt="Icon" width={142} height={142}/>
          </div>
          <h3>{name}</h3>
          <span>
            <Image src="/images/svg/map-pin.svg" alt="Map Icon" width={21} height={20}/>
            {location}
          </span>
        </div>
        <ul>
          {
            jobs.slice(0, 2).map((job) => (
              <li key={job.id}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.7758 10.5994L9.15078 4.97436C9.06945 4.89805 8.96818 4.84633 8.85868 4.82517C8.74918 4.80402 8.63593 4.8143 8.53203 4.85483C8.42966 4.89786 8.34231 4.97023 8.281 5.06283C8.21969 5.15542 8.18716 5.26409 8.1875 5.37514V16.6251C8.18716 16.7362 8.21969 16.8449 8.281 16.9375C8.34231 17.03 8.42966 17.1024 8.53203 17.1455C8.60142 17.173 8.67535 17.1873 8.75 17.1876C8.89937 17.187 9.04281 17.1291 9.15078 17.0259L14.7758 11.4009C14.8814 11.2943 14.9407 11.1502 14.9407 11.0001C14.9407 10.85 14.8814 10.706 14.7758 10.5994Z" fill="#FF8B13"/>
                </svg>
                <Link href={`/recruiters/${id}`}>{job.title}</Link>
              </li>
            ))
          }
        </ul>
        <div className="job-btn text-center">
          <Link href={`/recruiters/${id}`}>{jobs.length} Job Open</Link>
        </div>
      </div>
    </div>
  )
}

export default SingleCompanyCard;