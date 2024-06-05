import { Routes, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import AllProduct from './Components/AllProduct/AllProduct';
import Cart from './Components/Cart/Cart';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import 'react-toastify/dist/ReactToastify.css';
import { FilterContextProvider } from './utils/FilterContext';
import Chatbot from './Components/Chatbot/Chatbot';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/allproducts" element={<AllProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Chatbot/>
    </div>
  );
}

export default App;
