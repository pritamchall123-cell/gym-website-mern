import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SplashScreen from './components/SplashScreen';
import Navbar       from './components/Navbar';
import Footer       from './components/Footer';
import Home         from './pages/Home';
import Classes      from './pages/Classes';
import Register     from './pages/Register';
import Login        from './pages/Login';
import Dashboard    from './pages/Dashboard';
import Membership   from './pages/Membership';
import Trainers     from './pages/Trainers';
import Contact      from './pages/Contact';
import About        from './pages/About';
import BackToTop from './components/BackToTop';
import './App.css';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  },{});

  if(loading){
    return <SplashScreen onFinish={() => setLoading(false)}/>;
  }
  
  return (
    // AuthProvider wraps everything so all pages can access login state
    <AuthProvider>
      <Router>
        <Navbar />
        <div className='main-content'>
          <Routes>
            <Route path='/'          element={<Home />}      />
            <Route path='/classes'   element={<Classes />}   />
            <Route path='/register'  element={<Register />}  />
            <Route path='/login'     element={<Login />}     />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/membership' element={<Membership />} />
            <Route path='/trainers' element={<Trainers />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <Footer/>
        <BackToTop/>
      </Router>
    </AuthProvider>
  );
}

export default App;
