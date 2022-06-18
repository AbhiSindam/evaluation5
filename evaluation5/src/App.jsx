import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./component/Navbar";
import { Route, Routes } from 'react-router-dom' 
import { Home } from './component/Home'
import {SingIn} from './component/SingIn'
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/singin' element={<SingIn />}></Route>
      </Routes>
    </div>
  );
}

export default App;



