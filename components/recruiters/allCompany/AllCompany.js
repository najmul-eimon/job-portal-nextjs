import { useState } from 'react'
import { slice } from 'lodash';
import AdvanceFilter from '../../shared/advanceFilter/AdvanceFilter';
import LoadMoreButton from '../../shared/LoadMoreButton';
import SingleCompanyCard from './SingleCompanyCard';
import {companies} from '../../../data/company';

const AllCompany = () => {
  const categories = ["All", "Popular", "Recent", "Near"];
  const [active, setActive] = useState('all');
  const [filterCompanies, setFilterCompanies] = useState(companies);

  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(12);
  const initialCompanies = slice(filterCompanies, 0, index);

  const loadMore = () => {
    setIndex(index + 12);
    if (index >= filterCompanies.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }

  const handleFilter = (category) => {
    if(category.toLowerCase() === 'all'){
      setActive('all');
      setFilterCompanies(companies);
    }
    else{
      setActive(category.toLocaleLowerCase())
      setFilterCompanies(companies.filter((job) => job.status.toLowerCase() === category.toLowerCase()))
    }
  }

  return (
    <section className="all-company section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* page count */}
            <div className="page-count">
              <p>Showing <span>01-{initialCompanies.length < 10 ? '0' + initialCompanies.length : initialCompanies.length}</span> of <span>{companies.length < 10 ? '0' + companies.length : companies.length} </span> jobs</p>
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
            
            {/* all company */}
            <div className="row row-gutter">
              {
                initialCompanies.map((company) => <SingleCompanyCard key={company.id} data={company}/>)
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

export default AllCompany;