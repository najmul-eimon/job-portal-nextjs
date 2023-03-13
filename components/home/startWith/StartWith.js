import SingleCard from './SingleCard';
import {startCount} from '../../../data/startCount';
import Link from 'next/link';
import Image from 'next/image';

const StartWith = () => {
  return (
    <div className="start-with section-gap">
      <div className="container">
        <div className="row align-items-center row-gutter">
          <div className="col-md-6">
            <div className="left-part">
              <span>START WITH US</span>
              <h2>Explore thousands of jobs in one place and get the job of your dream</h2>
              <p>We know the best solution for all of your business ideas and we can help you solve all business problems</p>
              <div className="buttons">
                <Link href="/job" className="animate-btn animate-btn-fill find-btn">
                  <Image src="images/svg/search.svg" alt="Icon" width={21} height={21} />
                  Find here for new job
                </Link>
                <Link href="/register" className="animate-btn animate-btn-outline reg-btn">
                  Register
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="right-part">
            {
              startCount.map((item) => <SingleCard key={item.id} data={item}/>)
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartWith;