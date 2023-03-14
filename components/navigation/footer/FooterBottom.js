import Image from 'next/image';

const FooterBottom = () => {
  return (
    <section className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="copyright">
              <Image src='/images/svg/copyright-border-left.svg' alt="Border" width={148} height={14} />
              <p>Stay Hopeful, stay positive</p>
              <Image src='/images/svg/copyright-border-right.svg' alt="Border" width={148} height={14} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterBottom