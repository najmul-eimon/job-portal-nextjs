import { useState } from 'react';
import { slice } from 'lodash';
import LoadMoreButton from '../../shared/LoadMoreButton';
import SectionTitle from '../../shared/SectionTitle';
import SingleLatestJob from './SingleLatestJob';
import {companies} from '../../../data/company';

const LatestJob = () => {
  let filterCategory = ["All", "Popular", "Recent", "Near"];
  const [filterLatestJob, setFilterLatestJob] = useState(companies);
  const [activeFilter, setActiveFilter] = useState('all');

  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(6);
  const initialJobs = slice(filterLatestJob, 0, index);

  const loadMore = () => {
    setIndex(index + 6);
    if (index >= filterLatestJob.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }

  const handleFilter = (category) => {
    if(category.toLowerCase() === "all"){
      setFilterLatestJob(companies)
      setActiveFilter('all')
    }
    else{
      setFilterLatestJob(companies.filter((item) => item.status.toLowerCase() === category.toLowerCase()))
      setActiveFilter(category.toLowerCase())
    }
  }

  return (
    <section className="latest-job section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitle subtitle="Recent" title="Latest Jobs" description="We know the best solution for all of your business ideas and we can help you solve all business problems" />
            
            <ul className="latest-job-category scrollbar-hidden job-cat-btns">
              {
                filterCategory.map((category, index) => (
                  <li key={index}>
                    <button type="button" className={`animate-btn animate-btn-outline ${activeFilter === category.toLocaleLowerCase() ? 'active' : ''}`} onClick={() => handleFilter(category)}>{category}</button>
                  </li>
                ))
              }
            </ul>

            <div className="row row-gutter">
              {
                initialJobs.map((job) => <SingleLatestJob key={job.id} data={job}/>)
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

export default LatestJob;