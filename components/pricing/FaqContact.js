import Link from 'next/link';
import {banner} from '@/public/images/svg/faqContactBanner';

const FaqContact = () => {
  return (
    <section className="faq-contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Still have questions?</h2>
            <p>Support details to capture customers that might be on the fence.</p>
            <Link href='/contact' className="animate-btn animate-btn-fill">Contact us</Link>
          </div>
        </div>
      </div>
      {banner}
    </section>
  )
}

export default FaqContact;