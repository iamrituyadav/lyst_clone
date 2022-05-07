
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { Routes, Route } from "react-router-dom";
import {Home} from "./components/HomePage/HomePage";
import ProductPage from "./components/ProductPage/ProductPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import CartPage from "./components/CartPage/CartPage";
import { Paymentdetails } from "./components/PaymentPage/paymentDetails";


function App() {



  return (
    <div className="App">
      <Header />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/payment" element={<Paymentdetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <h1>hello there</h1>
     
      <Footer />
    </div>
  )
}

export default App
