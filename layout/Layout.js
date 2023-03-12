import Menubar from '@/components/navigation/Menubar';

const Layout = ({children}) => {
  return (
    <main>
      <Menubar/>
      {children}
    </main>
  )
}

export default Layout;