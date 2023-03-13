import { useState } from 'react';
import { slice } from 'lodash';
import LoadMoreButton from '../shared/LoadMoreButton';
import SectionTitle from '../shared/SectionTitle';
import SingleLocationCard from '../shared/SingleLocationCard';
import {locations} from '@/data/location';

const JobByLocation = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(8);
  const initialLocations = slice(locations, 0, index);

  const loadMore = () => {
    setIndex(index + 8);
    console.log(index);
    if (index >= locations.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }

  return (
    <section className="job-location section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitle subtitle="Location" title="Job by Location" description="We know the best solution for all of your business ideas and we can help you solve all business problems" />
          </div>

          <div className="col-lg-12">
            <div className="location-grid">
              {
                initialLocations.map((item) => <SingleLocationCard key={item?.id} data={item}/>)
              }
            </div>

            {/* load more button */}
            <div className="col-lg-12 hide-desktop">
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
      </div>
    </section>
  )
}

export default JobByLocation;