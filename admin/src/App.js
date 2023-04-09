import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './pages/auth/Login';
// import Register from './pages/Register';
import Dashboard from './pages/admin/Dashboard';
import AddProduct from './pages/admin/AddProduct'
import E404 from './pages/admin/404';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="*" element={<E404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
