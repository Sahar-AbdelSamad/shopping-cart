import Navbar from "./components/Navbar";
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './redux/cart/cartSlice';

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  },[cartItems, dispatch]);

  // useEffect(() => {
  //   dispatch(getCartItems());
  // },[]);

  if(isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar/>
      <CartContainer/>
    </main>
  );
}
export default App;