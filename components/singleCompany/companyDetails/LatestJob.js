import ReactPaginate from 'react-paginate';
import SingleJobCard from "../SingleJobCard";

const LatestJob = ({handlePageClick, pageCount, currentItems, categories, handleFilter, itemOffset, active, filterJobs}) => {
  return (
    <div className="latest-job">
      <div className="section-title">
        <h3>Latest Jobs</h3>
      </div>

      {/* filter-container */}
      <div className="filter-container">
        {/* page count */}
        <div className="page-count">
          <p>Showing <span>{(itemOffset+1) < 10 ? '0' + (itemOffset+1) : (itemOffset+1)}-{(itemOffset + currentItems?.length) < 10 ? '0' + (itemOffset + currentItems?.length) : (itemOffset + currentItems?.length)}</span> of <span>{filterJobs?.length < 10 ? '0' + filterJobs?.length : filterJobs?.length} </span> jobs</p>
        </div>

        <ul className="job-category-buttons scrollbar-hidden job-cat-btns">
          {
            categories.map((category, index) => (
              <li key={index} className={category.toLocaleLowerCase() === active ? 'active' : ''}>
                <button type="button" className="animate-btn animate-btn-outline" onClick={() => handleFilter(category)}>{category}</button>
              </li>
            ))
          }
        </ul>
      </div>

      {/* jobs */}
      <div className="col-lg-12">
        <div className="row row-gutter">
          {
            currentItems?.map((job) => <SingleJobCard key={job.id} data={job}/>)
          }
        </div>
      </div>

      {/* job pagination */}
      <ReactPaginate
        className="pagination"
        activeClassName="active"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />

    </div>
  )
}

export default LatestJob