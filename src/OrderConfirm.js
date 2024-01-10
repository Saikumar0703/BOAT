import React, { useState } from 'react'

import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function OrderConfirm() {

  const navigate = useNavigate()


  return (

    <div>
    <div >



        <div className="congratulation-area text-center mt-5">
  <div className="container">
    <div className="congratulation-wrapper">
      <div className="congratulation-contents center-text">
        <div className="congratulation-contents-icon">
          <i className="fas fa-check" />
          <FontAwesomeIcon icon={faCheck}/>
        </div>
        <h4 className="congratulation-contents-title"> Congratulations! </h4>
        <p className="congratulation-contents-para"> Your order is Placed Successfully.Thankyou! </p>
        <div className="btn-wrapper mt-4">
          <a  className="btn btn-dark" onClick={()=>navigate("/")}> Go to Home </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
    </div>
  )
}
