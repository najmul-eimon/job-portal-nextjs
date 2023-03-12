import borderLeft from '../../../assets/images/svg/copyright-border-left.svg';
import borderRight from '../../../assets/images/svg/copyright-border-right.svg';

const FooterBottom = () => {
  return (
    <section className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="copyright">
              <img src={borderLeft} alt="Border" />
              <p>Stay Hopeful, stay positive</p>
              <img src={borderRight} alt="Border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterBottom