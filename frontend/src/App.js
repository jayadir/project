import Homepage from "./Homepage";
import { BrowserRouter,Route,Routes } from "react-router-dom";
// import Loginpage from "./Loginpage";
//import Login from "./components/logandsign/Login.jsx";
import Signup from "./components/logandsign/Signup.jsx";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Login from "./components/logandsign/Login.jsx";
import Cart from "./components/Cart.jsx";
import Payment from "./components/Payment.jsx";
import Orders from "./components/Orders.jsx";
function App() {
  localStorage.setItem('isLoggedIn', 'false');

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={Homepage}/>
      <Route exact path="/createuser" element={<Signup/>}/>
      <Route exact path="/Login" element={<Login/>}/> 
      <Route exact path="/Cart" element={<Cart/>}/>
      <Route exact path="/payment" element={<Payment/>}/>
      <Route exact path="/pastorders" element={<Orders/>}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
