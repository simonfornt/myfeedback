
import './App.css'
import Nav from './components/Nav'
import MenuItem from './components/MenuItem'
import CarouselSection from './components/CarouselSection';
import Home from './pages/Home';
import ActivitesSection from './components/ActivitesSection';
import Footer from './components/Footer';

function App() {
 

  return (
    <>
      <Nav/>
      <MenuItem/>
      <CarouselSection/>
      
      <Home/>
      <ActivitesSection/>


      <Footer/>

    </>
  )
}

export default App;
