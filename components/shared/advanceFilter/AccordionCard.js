import Accordion from 'react-bootstrap/Accordion';
import { FiSearch } from 'react-icons/fi';
import Checkbox from './Checkbox';

const AccordionCard = ({eventKey, title, dataClass, data, label}) => {

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Body>
      <div className={`${dataClass} filter-body`}>
        {
          label && (
            <label className="position-relative input-search-label">
              <input type="text" placeholder="search" className="input-search"/>
              <FiSearch className='icon'/>
            </label>
          )
        }

        <ul className="custom-scrollbar">
          {
            data.map((item) => <Checkbox key={item.id} data={item} />)
          }
        </ul>
      </div>
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default AccordionCard;