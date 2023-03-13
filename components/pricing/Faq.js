import {faq} from '../../data/price';

const Faq = () => {
  return (
    <section className="faq section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="section-title">
              <h2>FAQ</h2>
              <p>Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.</p>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="questions">
              <div className="row">
                {
                  faq.map(({id, question, answer}) => (
                    <div key={id} class="col-lg-6">
                      <h3>{question}</h3>
                      <p>{answer}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq;