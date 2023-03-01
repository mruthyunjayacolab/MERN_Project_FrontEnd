

import { BrowserRouter, Routes, Route } from "react-router-dom"
import FoodiHome from "./components/FoodiHome";
import Login from './components/login';
import Signup from "./components/signup";
import Navbar from "./components/nav";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navbar/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/home' element={<FoodiHome/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
