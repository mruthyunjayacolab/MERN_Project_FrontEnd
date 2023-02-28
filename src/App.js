

import { BrowserRouter, Routes, Route } from "react-router-dom"
import FoodiHome from "./components/FoodiHome";
import Login from './components/login';
import Signup from "./components/signup";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/home' element={<FoodiHome/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
