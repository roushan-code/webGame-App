import './App.scss';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import Kipon from './component/Kipon';
import Robotrix from './component/Robotrix';
import Treasurebox from './component/Treasurebox';
import Header from './component/Header';
import Footer from './component/Footer';
import Careers from './component/Careers';
import About from './component/About.jsx';
import ScrollToTop from './component/ScrollToTop';



function App() {
  
  return (
    <Router>
      <ScrollToTop/>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Kipon" element={<Kipon/>} />
        <Route path="/Robotrix" element={<Robotrix/>} />
        <Route path="/Treasurebox" element={<Treasurebox/>} />
        <Route path="/Careers" element={<Careers/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/#Contact" element={<Contact/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

