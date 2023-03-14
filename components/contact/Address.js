import Image from 'next/image';
import {address} from '@/data/contact';

const Address = () => {
  return (
    <section className="address section-gap">
      <div className="container">
        <div className="row row-gutter">
          {
            address.map(({id, icon, title, description, contact}) => (
              <div key={id} className="col-sm-6 col-lg-4">
                <Image src={icon} alt="Icon" width={40} height={40} />
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={title === 'Email' ? `mailTo:${contact}` : title === 'Phone' ? `tel:${contact}` : '#!'}>{contact}</a>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Address;