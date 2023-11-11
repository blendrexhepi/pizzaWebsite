import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/home';
import { Footer } from './components/footer';
import { Menu } from './pages/menu';
import { AboutUs } from './pages/About';
import { ContactUs } from './pages/contactUs';

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='/aboutus' element={<AboutUs />}/>
            <Route path='/contactus' element={<ContactUs />}/>
          </Routes>
          <Footer />
       </Router>
    </div>
  );
}

export default App;
