import { slice } from 'lodash';
import { useEffect, useState } from 'react';
import LoadMoreButton from '../../shared/LoadMoreButton';
import AdvanceFilter from '../../shared/advanceFilter/AdvanceFilter';
import SingleJob from './SingleJob';
import {companies} from '@/data/company';

const AllJob = () => {
  const categories = ["All", "Popular", "Recent", "Near"];
  const [active, setActive] = useState('all');
  const [allJobs, setAllJobs] = useState([]);
  const [filterAllJobs, setFilterAllJobs] = useState([]);

  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(12);
  const initialJobs = slice(filterAllJobs, 0, index);

  const loadMore = () => {
    setIndex(index + 12);
    if (index >= filterAllJobs.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }
  
  useEffect(() => {
    let getJobs = companies.map((company) => company.jobs.slice(0,2)).flat();
    setAllJobs(getJobs)
    setFilterAllJobs(getJobs)
  }, [])

  const handleFilter = (category) => {
    if(category.toLowerCase() === 'all'){
      setActive('all');
      setFilterAllJobs(allJobs);
    }
    else{
      setActive(category.toLocaleLowerCase())
      setFilterAllJobs(allJobs.filter((job) => job.status.toLowerCase() === category.toLowerCase()))
    }
  }

  return (
    <section className="all-job section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* page count */}
            <div className="page-count">
              <p>Showing <span>01-{initialJobs.length < 10 ? '0' + initialJobs.length : initialJobs.length}</span> of <span>{filterAllJobs.length < 10 ? '0' + filterAllJobs.length : filterAllJobs.length} </span> jobs</p>
            </div>

            {/* filter-container */}
            <div className="filter-container">
              <ul className="job-category-buttons scrollbar-hidden job-cat-btns">
                {
                  categories.map((category, index) => (
                    <li key={index} className={category.toLocaleLowerCase() === active ? 'active' : ''}>
                      <button type="button" className="animate-btn animate-btn-outline" onClick={() => handleFilter(category)}>{category}</button>
                    </li>
                  ))
                }
              </ul>

              {/* advance filter */}
              <AdvanceFilter/>
            </div>

            {/* job cards */}
            <div className="row row-gutter">
              {
                initialJobs.map((job) => <SingleJob key={job.id} data={job}/>)
              }
            </div>

            {/* load more button */}
            {
              !isCompleted && (
                <div className="col-lg-12">
                  <LoadMoreButton action={loadMore}/>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllJob;