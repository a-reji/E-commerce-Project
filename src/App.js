
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSinup from './Pages/LoginSinup';
import Shop from './Pages/Shop';

function App() {
  return (
    <div >
      
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory category="men"/>}/>
        <Route path='/women' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kids"/>}/>
        <Route path='product' element={<Product/>}></Route>
        <Route path='productId' element={<Product/>}></Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSinup/>}/>
       </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
