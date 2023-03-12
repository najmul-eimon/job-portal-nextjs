import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const SingleCard = ({data}) => {
  const {id, title, icon, count} = data;

  return (
    <div className={`single-card ${id === 's1' ? 'job' : id === 's2' ? 'hired' : id === 's3' ? 'companies' : ''}`}>
      <span className="icon-box">
        <img src={icon} alt="Icon"/>
      </span>
      <div>
        <h2>
          <CountUp end={count >= 1000 ? count/1000 : count}>
            {
              ({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span className="counter" ref={countUpRef}/>
                </VisibilitySensor>
              )
            }
          </CountUp>
          {
            count >= 1000 ? 'K+' : '+'
          }
        </h2>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default SingleCard;