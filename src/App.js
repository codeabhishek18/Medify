import Homepage from './pages/homepage/Homepage';
import './App.css';
import Headline from './components/headline/Headline';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom'
import FindDoc from './pages/finddoc/FIndDoc';
import Footer from './components/footer/Footer';
import MyBookings from './pages/bookings/MyBookings';

function Medify()
{
  return(
    <div>
      <Headline/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Medify/>}>
          <Route path='' element={<Homepage/>}/>
          <Route path='doctors' element={<FindDoc/>}/>
          <Route path='mybookings' element={<MyBookings/>}/>
        </Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
