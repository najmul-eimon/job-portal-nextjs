import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import SectionTitle from '../SectionTitle';
import SingleBlog from "./SingleBlog";
import {blogs} from '@/data/blog';

const Blog = ({dataClass}) => {

  return (
    <section className={`blog section-gap ${dataClass ? dataClass : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitle subtitle="Blog" title="News and Blog" description="Get the latest news, updates and tips. Building successful careers, one job at a time." />
            
            <Swiper
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              autoplay= {true}
              speed={3000}
              allowTouchMove={true}
              breakpoints= {{
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
              modules={[Pagination, Autoplay]}
              pagination= {{clickable: true}}
              className="blog-slider"
            >
            {
              blogs.slice(0,6).map((blog) => (
                <SwiperSlide key={blog.id}>
                  <SingleBlog data={blog} />
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

export default Blog;