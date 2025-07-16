
import  Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import SellerDashboard from './pages/seller/SellerDashboard'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
import Register from './pages/Register'
import Cart from './pages/Cart'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
function App() {

  return (
      
    <Router>
      <AuthProvider>
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route  path="/cart" element={<Cart />}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
      </Routes>
      </AuthProvider>
    </Router>
    
    

  )
}

export default App
