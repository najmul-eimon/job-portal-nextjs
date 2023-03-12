import Footer from '@/components/navigation/footer/Footer';
import Menubar from '@/components/navigation/Menubar';

const Layout = ({children}) => {
  return (
    <main>
      <Menubar/>
      {children}
      <Footer/>
    </main>
  )
}

export default Layout;