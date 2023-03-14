import { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {menuItems} from '@/data/menuItems';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Menubar = () => {
  const [scroll, setScroll] = useState(false);
  const router = useRouter();
  const fullPath = router.pathname.split('/');
  const basePath = fullPath[1];
  
  useEffect(() => {
    document.addEventListener('scroll', () => {
      let scrolling = window.scrollY;

      if(scrolling > 200){
        setScroll(true);
      }
      else{
        setScroll(false);
      }
    });
  }, [])

  const handleClick = () => {
    if(window.innerWidth < 992){
      document.querySelector('.navbar-toggler').click();
    }
  }

  return (
    <header className={`menubar ${scroll ? 'navFixed' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Navbar expand="lg">
              <Link className="navbar-brand" href="/">
                <Image src="/images/svg/logo.svg" alt="Logo" width={97} height={12}/>
              </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className="navbar-toggler-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.9375 5H14.0625" stroke="#0075C8" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
                    <path d="M3.125 10H16.875" stroke="#0075C8" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
                    <path d="M5.9375 15H14.0625" stroke="#0075C8" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
                  </svg>                    
                </span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <ul className="navbar-nav me-auto">
                  {
                    menuItems.map(({id, name, link}) => (
                      <li key={id} className="nav-item">
                        <Link className={`nav-link ${basePath === link.split('/')[1] ? 'active' : ''}`} href={link} onClick={handleClick}>{name}</Link>
                      </li>
                    ))
                  }
                </ul>
                <ul className="navbar-nav right-nav">
                  <li>
                    <Link href="/register" className="animate-btn animate-btn-outline register-btn">Register</Link>
                  </li>
                  <li>
                    <Link href="/login" className="animate-btn animate-btn-fill login-btn">Login</Link>
                  </li>
                </ul>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Menubar;