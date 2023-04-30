import Link from 'next/link';
import Image from 'next/image';

const FooterTop = () => {
  return (
    <section className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-5">
            <div className="footer-about">
              <Link href="/" className="footer-logo">
                <Image src='/images/svg/footer-logo.svg' alt="Logo" width={193} height={24}/>
              </Link>
              <p className="about-company">21 Job Interview Tips: How To Make a Great Impression. Our mission is to create the world&apos;s most sustainable healthcare company.</p>
              <ul className="social">
                <li>
                  <a href="#!">
                    <Image src='/images/svg/fb.svg' width={21} height={20} alt="Facebook"/>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <Image src='/images/svg/yt.svg' width={21} height={20} alt="Youtube"/>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <Image src='/images/svg/dribbble.svg' width={21} height={20} alt="Dribbble"/>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <Image src='/images/svg/whatsapp.svg' width={21} height={20} alt="Whatsapp"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-2 offset-lg-2">
            <div className="footer-title">
              <h4>Resources</h4>
            </div>
            <ul className="footer-links">
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/job">Find a job</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-3">
            <div className="text-end">
              <div className="footer-title">
                <h4>More</h4>
              </div>
              <ul className="footer-links">
                <li><Link href="">Privacy</Link></li>
                <li><Link href="">Terms & Conditions</Link></li>
                <li><Link href="/pricing">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterTop