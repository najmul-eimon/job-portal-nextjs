import Footer from '@/components/navigation/footer/Footer';
import Menubar from '@/components/navigation/Menubar';
import { useRouter } from 'next/router';

const Layout = ({children}) => {
  const router = useRouter();

  return (
    <main>
      <Menubar/>
      {children}
      {
        router.pathname !== '/404' && <Footer/>
      }
    </main>
  )
}

export default Layout;