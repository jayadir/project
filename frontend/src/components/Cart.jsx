import React from 'react';
import Navigation from './Navigation';
import { useNavigate } from 'react-router-dom';
export default function Cart() {
  const navigate=useNavigate();
  const cartItems = JSON.parse(localStorage.getItem('cartlist')) || [];
  
  const handleRemoveItem = (itemName) => {
    const updatedCart = cartItems.filter(item => item.name !== itemName);
    localStorage.setItem('cartlist', JSON.stringify(updatedCart));
    navigate('/cart');
  };
  function totalprice(){
  let total=0;
  for(let i=0;i<cartItems.length;i++){
    let j=parseInt(cartItems[i].price,10);
    total+=j;
  }
  return total;
};

  return (
   
    <>
      <Navigation />
      <div className="container mt-3">
        <hr/>
        <h2 className='d-flex justify-content-center'>Cart</h2>
        <hr/>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="list-group">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name}</strong>
                  <div>Quantity: {item.quantity}</div>
                  <div>Price: {item.price}/-</div>
                </div>
                <button className="btn btn-danger" onClick={() => handleRemoveItem(item.name)}>
                  Remove
                </button>
              </li>
            ))}
            <li className='list-group-item d-flex justify-contnt-between'>
            <div className='  fs-4 '><strong>Total:</strong>{totalprice()}</div>
            <button className="  btn btn-success ms-auto" onClick={()=>navigate('/payment')} >
                  PAY
            </button>
            </li>
          </ul>
        )}
      </div>
      <br/>
    </>
  );
}
