import { Outlet } from 'react-router-dom'; // Ensure this import is correct
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import About from  '../About/About'; 
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import ScrollToTop from '../ScrollToTop/ScrollToTop';


import './Layout.css';

const Layout = () => (

  <div id='top' className='app'>
    <Header />
    <main>
      <About />
      <Outlet /> {/* This will render either Projects or ProjectDetail */}
      <Skills />
      <Contact />
    </main>
    <ScrollToTop />
    <Footer />
  </div>
);

export default Layout;
