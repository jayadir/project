import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
const PaymentsPage = () => {
  const nav = useNavigate();
  const checkout = JSON.parse(localStorage.getItem('cartlist')) || [];
  const list = [];
for (let i = 0; i < checkout.length; i++) {
  let temp = checkout[i].name;
  list.push({ name: temp });
}


  
  const handlepayment=async()=>{
    console.log(list)
    let user=localStorage.getItem('user');
    let res= await fetch("http://localhost:5001/api/myorders",{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        email:user,
        orders:list
      })
    });
    const json = await res.json();
    if(json.success){
      localStorage.setItem('cartlist', JSON.stringify([]))
      nav('/payment')
      alert('payment done')
    }

  }
  function totalprice() {
    let total = 0;
    for (let i = 0; i < checkout.length; i++) {
      let j = parseInt(checkout[i].price, 10);
      total += j;
    }
    return total;
  }
  
  return (
    <>
      {checkout.length > 0 ? (
        <div className="container mt-5">
          <h2 className="mb-4">Payments Page</h2>

          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Scan and Pay</h5>

                  {/* Display QR code instead of the form */}
                  <div className="text-center">

                    {/* <QRCode value={JSON.stringify(1000)} /> */}
                  </div>
                  
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Order Summary</h5>

                  {/* Display order summary */}
                  <p>Price: {totalprice()}</p>

                  <hr />

                  {/* Display total amount */}
                  
                  <p className="fw-bold">Total Amount: {totalprice()}</p>
                  <div>
                    <label htmlFor='payid' className='me-2'>Enter Payment id   </label>
                    <input type='text' name='payid'></input>
                    <button className="  btn btn-success ms-4" onClick={handlepayment}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center justify-content-center container my-auto mx-auto ">
        <strong>Checkout is empty</strong>
        <div className="mt-3">
          <button className="btn btn-primary me-2" onClick={()=>nav('/')}>Home</button>
        </div>
      </div>      )}
    </>
  );
};

export default PaymentsPage;
