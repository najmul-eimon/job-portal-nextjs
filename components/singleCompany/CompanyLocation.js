import SectionTitle from "../shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import {locations} from '../../data/location';
import SingleLocationCard from "../shared/SingleLocationCard";

const CompanyLocation = () => {
  return (
    <section className="job-location company-details-location section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitle subtitle="Location" title="Job by Location" description="We know the best solution for all of your business ideas and we can help you solve all business problems" />
          </div>

          <div className="col-lg-12">
            <Swiper 
              className="job-location-slider"
              spaceBetween={24}
              grabCursor={true}
              slidesPerView={1}
              loop={true}
              autoplay={true}
              speed={3000}
              allowTouchMove={true}
              breakpoints={{
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                }
              }}
              pagination={{clickable: true}} 
              modules={[Pagination, Autoplay]} 
            >
              {
                locations.map((location) => (
                  <SwiperSlide key={location.id}>
                    <SingleLocationCard data={location}/>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyLocation;