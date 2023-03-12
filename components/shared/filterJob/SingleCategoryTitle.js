import Image from "next/image";

const SingleCategoryTitle = ({icon, label, arrow}) => {

  return (
      <div className="d-flex align-items-center category-heading">
        <div className="d-flex align-items-center">
          <Image src={icon} alt="Icon"/>
          <small>{label}</small>
        </div>
        {
          arrow && (
          <span className="icon">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.61405 8.61203L7.06739 12.0654C7.58739 12.5854 8.42739 12.5854 8.94739 12.0654L12.4007 8.61203C13.2407 7.77203 12.6407 6.33203 11.4541 6.33203H4.54739C3.36072 6.33203 2.77405 7.77203 3.61405 8.61203Z" fill="#070707"/>
            </svg>
          </span>
          )
        }
      </div>
  )
}

export default SingleCategoryTitle;