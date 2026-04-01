
import {useState,useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Narbar from './component/Narbar';
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authenticate,setAuthenticate]=useState(false);
  useEffect(()=>{
    console.log("Test",authenticate);
  },[authenticate])

  return (
    <div>
      <Narbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route  path="/" element={<ProductAll authenticate={authenticate}/>} />
        <Route  path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route  path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  );
}

export default App;
