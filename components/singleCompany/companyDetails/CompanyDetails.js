import { useEffect, useState } from "react";
import LatestJob from "./LatestJob";
import Locations from "./Locations";

const CompanyDetails = ({singleCompany}) => {
  const categories = ["All", "Popular", "Recent"];
  const [active, setActive] = useState('all');
  const [filterJobs, setFilterJobs] = useState(singleCompany.jobs);
  const itemsPerPage = 5;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filterJobs?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filterJobs?.length / itemsPerPage);

  const handleFilter = (category) => {
    if(category.toLowerCase() === 'all'){
      setActive('all');
      setFilterJobs(singleCompany.jobs);
    }
    else{
      setActive(category.toLocaleLowerCase())
      setFilterJobs(singleCompany.jobs?.filter((job) => job.status.toLowerCase() === category.toLowerCase()))
    }
  }

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filterJobs?.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setFilterJobs(singleCompany.jobs)
  }, [singleCompany])

  return (
    <section className="location-job section-gap">
      <div className="container">
        <div className="row">
          {/* latest job */}
          <div className="col-lg-8 order-2 order-lg-1">
            <LatestJob handlePageClick={handlePageClick} pageCount={pageCount} currentItems={currentItems} categories={categories} handleFilter={handleFilter} itemOffset={itemOffset} active={active} filterJobs={filterJobs}/>
          </div>

          {/* company location */}
          <div className="col-lg-4 order-1 order-lg-2">
            <Locations/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyDetails;