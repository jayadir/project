import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Items(props) {
  const [quantity, setQuantity] = useState(1);
  const price = parseInt(props.price, 10);
  const finalPrice = price * quantity;

  function handlecart() {
    let existingItems = JSON.parse(localStorage.getItem('cartlist')) || [];
    const newItem = {
      name: props.name,
      quantity: quantity,
      price: finalPrice,
    };
    const updatedCartList = [...existingItems, newItem];
    localStorage.setItem('cartlist', JSON.stringify(updatedCartList));
  }

  function increase() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function decrease() {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  }

  return (
    <div>
      <div className="card my-2 mx-2" style={{ width: '18rem', border: '1px solid white', maxHeight: '400px' }}>
        <img
          src={props.image}
          className="card-img-top"
          alt="..."
          style={{ maxWidth: '100%', height: 'auto', maxHeight: '200px', objectFit: 'cover' }}
        />
        <div className="card-body" style={{ overflow: 'hidden' }}>
          <h5 className="card-title" style={{ fontSize: '1.2rem', margin: '0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {props.name}
          </h5>
        </div>
        <div className="card-body">
          <div>Price: {finalPrice}/-</div>
          <div className="quantity-container">
            <button className="quantity-btn" onClick={decrease}>
              -
            </button>
            <input
              type="text"
              className="quantity-input m-1"
              value={quantity}
              readOnly
              style={{ width: '10%', textAlign: 'center', fontSize: '1rem' }}
            />
            <button className="quantity-btn" onClick={increase}>
              +
            </button>
          </div>
          <button>
            <Link className="card-link " style={{ "textDecoration": "none", "color": "white" }} onClick={handlecart}>
              Add to Cart
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
