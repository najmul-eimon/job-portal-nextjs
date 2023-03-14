import Image from 'next/image';
import Link from 'next/link'
import {notFoundBanner, buildingBg} from '@/public/images/svg/notFound';

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content text-center">
              <h2>Page Not Found</h2>
              <p>It&apos;s Seem that this was lost. sorry...</p>
              <Link href="/" className="animate-btn animate-btn-outline">
                <i className="ph-arrow-u-up-left"></i>
                Back to home
              </Link>
            </div>
            <div className="box d-flex align-items-center justify-content-between">
              <Image className="four four-one" src="/images/svg/4a.svg" alt="Four" width={199} height={210}/>
              <div className="sun-mobile"></div>
              <Image className="four four-two" src="/images/svg/4b.svg" alt="Four" width={173} height={210}/>
            </div>
          </div>
        </div>
      </div>

      {/* bg */}
      <div className="shadow-sun-box">
        <div className="shadow-sun"></div>
      </div>

      {notFoundBanner}
      {buildingBg}

    </section>
  )
}

export default NotFound