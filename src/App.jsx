import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ProductsPage />} />
          <Route path='cart' element={<CartPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
