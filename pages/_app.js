import Layout from '@/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/pagination";
import '@/styles/globals.css';
import '@/styles/navigation.css';
import '@/styles/home.css';
import '@/styles/filter.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
