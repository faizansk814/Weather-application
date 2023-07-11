import './App.css';
import Home from './Pages/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SimpleCard from './Pages/signin';
import SignupCard from './Pages/signup';
import Weather from './Pages/weather';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<SimpleCard />}/>
          <Route path='/signup' element={<SignupCard />}/>
          <Route path='/weather' element={<Weather />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
