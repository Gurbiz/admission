import React from 'react';
import Button from './Button';
import './fees.css';



function Fees() {
    return(
        
        <div className="column middle">
        <div>
          <h4>APPLICATION FORM</h4>
          <h2>Pay Application Fees</h2>
          <h5>Application Fee to be Paid:</h5>
          <h2>Rs. 300</h2>
        </div>
        <div>
           
            
            
            <h5 style={{color:"#0476d0"}}>Note that payment cannot be made using Debit Card.
            You can pay using any Credit Card,Netbanking(all Indian Banks),Wallet,UPI(Google Pay,
            BHIM,etc.).</h5>

            <h5>I understand that the information furnished in the Application Form cannot be changed 
                after the payment is made.The Application fee cannot be refunded once the Application 
                Form gets accepted.
            </h5>
            
            <Button link={"Fees"}/>
        </div>
        </div>
    
    
        
    )
}

export default Fees;