import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';

export default function Orders() {
  const [pastOrders, setPastOrders] = useState([]);
  const user = localStorage.getItem('user');
  useEffect(() => {
    const fetchPastOrders = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/pastorders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: user }),
        });

        const data = await response.json();
        setPastOrders(data.pastorders);
      } catch (error) {
        console.error('Error fetching past orders:', error.message);
      }
    };

    if (user) {
      fetchPastOrders();
    }
  }, [user]);
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className="container mt-5">
        <h2>My Orders</h2>
        <div className="card">
          <div className="card-body">
            {pastOrders.length === 0 ? (
              <p className="card-text">No past orders available.</p>
            ) : (
              <ul className="list-group">
                {pastOrders.map((order, index) => (
                  <li key={index} className="list-group-item">
                    {order.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
