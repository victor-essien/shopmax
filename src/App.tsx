
import  Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import SellerDashboard from './pages/seller/SellerDashboard'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
import Register from './pages/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
