import Layout from '@/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/pagination";
import '@/styles/globals.css';
import '@/styles/navigation.css';
import '@/styles/home.css';
import '@/styles/filter.css';
import '@/styles/job-location.css';
import '@/styles/blog.css';
import '@/styles/job.css';
import '@/styles/advance-filter.css';
import '@/styles/filter-container.css';
import '@/styles/newsletter.css';
import '@/styles/recruiter.css';
import '@/styles/company-details.css';
import '@/styles/blog-page.css';
import '@/styles/contact.css';
import '@/styles/pricing.css';
import '@/styles/authentication.css';
import '@/styles/not-found.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
