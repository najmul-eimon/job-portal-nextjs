import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {industry, position, experience, jobType} from '@/data/filterCriteria';
import {CiSliderHorizontal} from 'react-icons/ci';
import ReactSlider from 'react-slider';
import AccordionCard from './AccordionCard';

const AdvanceFilter = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  // const [min, setMin] = useState(5);
  // const [max, setMax] = useState(25);

  // const handleInput = (min, max) => {
  //   setMin(min);
  //   setMax(max);
  // };

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown)
  }

  return (
    <div className="position-relative">
      <button className={`filter-button ${openDropdown ? 'active' : ''}`} onClick={handleDropdown}>
        <CiSliderHorizontal className='icon'/>
        Filter
      </button>

      {/* filter options */}
      {
        openDropdown && (
          <div className="advance-filter">
            <h3 className="filter-title">Advance filter</h3>

            <Accordion defaultActiveKey={['0']} alwaysOpen>
              {/* item 1 */}
              <AccordionCard eventKey="0" dataClass="industry" title="industry" data={industry} label={true}/>

              {/* item 2 */}
              <Accordion.Item eventKey="1">
                <Accordion.Header>Salary Range</Accordion.Header>
                <Accordion.Body>
                  <div className="salary">
                  <ReactSlider
                      className="salary-slider"
                      thumbClassName="salary-thumb"
                      trackClassName="salary-track"
                      defaultValue={[0, 100]}
                      ariaLabel={['Lower thumb', 'Upper thumb']}
                      ariaValuetext={state => `Thumb value ${state.valueNow}`}
                      renderThumb={(props, state) => <div {...props}>${state.valueNow}k</div>}
                      pearling
                      minDistance={10}
                  />
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              {/* item 3 */}
              <AccordionCard eventKey="2" dataClass="position" title="position" data={position} label={false}/>

              {/* item 4 */}
              <AccordionCard eventKey="3" dataClass="experience" title="Experience Level" data={experience} label={false}/>

              {/* item 5 */}
              <AccordionCard eventKey="4" dataClass="job" title="Job type" data={jobType} label={false}/>
            </Accordion>
          </div>
        )
      }
    </div>
  )
}

export default AdvanceFilter;