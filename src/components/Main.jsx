import React from 'react';
import './main.css';
import Button from './Button';


function Main() {
    return(
        
        <div className="column middle">
        <div>
          <h4>APPLICATION FORM</h4>
          <h2>Personal Details</h2>
          <h5>All Fields marked with * are mandatory</h5>
        </div>
        <div>
           
            
            <label htmlFor="fname"><h4>Applicant's Full Name*</h4></label>
            <h5 style={{color:"#0476d0"}}>Applicant's name must exactly be the same as in their ID proof</h5>
            <input type="text" id="fname" name="firstname" placeholder="Type something..."/>
            <label htmlFor="dob"><h4>Date of Birth*</h4></label>
            <input type="text" id="dob" name="dateofbirth" placeholder="Type your date of birth"/>
            <label htmlFor="gender"><h4>Gender*</h4></label>
            <div className='space'>
            <label className="container"><h4>Male</h4>
                <input type="checkbox" defaultChecked="checked"/>
                <span className="checkmark"></span>
              </label>
              
              <label className="container"><h4>Female</h4>
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
              
              <label className="container"><h4>Other</h4>
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
              </div>
              <label htmlFor="country"><h4>Country</h4></label>
              <select id="country" name="country">
                
                <option value="australia">India</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>

              <label htmlFor="ID"><h4>ID Type*</h4></label>
              <h5 style={{color:"#0476d0"}}>ID selected here will need to be uploaded for verification</h5>
              <select id="country" name="country" placeholder="Select from the list">
                <option value="aadhaar">Aadhaar Card</option>
                <option value="pan">PAN Card</option>
                <option value="voter">Voter ID</option>
              </select>

              <label htmlFor="fname"><h4>ID Number*</h4></label>
            <h5 style={{color:"#0476d0"}}>ID number of the ID selected above</h5>
            <input type="text" id="fname" name="firstname" placeholder="Type something..."/>

            <label htmlFor="ID"><h4>Category*</h4></label>
              <h5 style={{color:"#0476d0"}}>Candidates selecting SC/ST/EWS/OBC-NCL category will be required to upload the relevant documents to avail waivers in fee/cut-off scores.</h5>
              <select id="country" name="country" placeholder="Select from the list">
                <option value="aadhaar">General</option>
                <option value="aadhaar">ST</option>
                <option value="pan">SC</option>
                <option value="voter">EWS</option>
                <option value="voter">OBC-NCL</option>
              </select>

              <label className="container"><p style={{fontFamily:"sans-serif"}}>I hereby declare that all personal information furnished above is correct.If any of the details furnished above is found to be false, I agree to have my application/admission cancelled or terminated.</p>
                <input type="checkbox" defaultChecked="checked"/>
                <span className="checkmark"></span>
              </label>

              <Button link={"education"}/>
    


        </div>
        </div>
    
    
        
    )
}

export default Main;