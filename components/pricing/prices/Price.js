import SectionTitle from '../../shared/SectionTitle';
import SinglePrice from './SinglePrice';
import {prices} from '../../../data/price';

const Price = () => {
  return (
    <section className="pricing section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitle subtitle="Pricing" title="Simple & transparent pricing" description="Access to all features.no credit card required." />
            
            <div className="pricing-cards">
              <div className="row">
                {
                  prices.map((price) => <SinglePrice key={price.id} data={price} />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Price;