import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Nav from './components/Nav';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import Betila from './Betila/Betila';

function App() {
  return (
    <Router>
      <Nav />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path='/betila' element={<Betila/>}/>
        {/* Add more routes as needed */}
      </Routes>
     
      <Footer />
    </Router>
  );
}

export default App;
