
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom'
import Home from './home/Home';
import Products from './home/Products';
import Services from './home/Services';
import SignUp from './home/SignUp';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
