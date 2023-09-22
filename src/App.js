import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div className="App">
       
       <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/*" element={<NotFound/>} />
          </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
