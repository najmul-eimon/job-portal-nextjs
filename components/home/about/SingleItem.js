import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const SingleItem = ({data}) => {
  const {title, icon, count} = data;

  return (
    <div className="col-sm-6 col-md-3">
      <div className="single-counter text-center">
        <div className="icon-box">
          <img src={icon} alt="Icon"/>
        </div>
        <h3>
          <CountUp end={count >= 1000 ? count/1000 : count}>
            {
              ({countUpRef, start}) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span className="counter" ref={countUpRef} />
                </VisibilitySensor>
              )
            }
          </CountUp>
          {
            count >= 1000 ? 'K+' : '+' 
          }
        </h3>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default SingleItem;