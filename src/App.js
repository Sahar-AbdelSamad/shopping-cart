import Navbar from "./components/Navbar";
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './redux/cart/cartSlice';

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  },[cartItems, dispatch]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar/>
      <CartContainer/>
    </main>
  );
}
export default App;