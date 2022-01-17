import React from 'react';
import './additional.css';
import Button from './Button';

function Additional() {
    return(
        <div className="column middle">
        <div>
          <h4>APPLICATION FORM</h4>
          <h2>Additional Details</h2>
          <h5>All Fields marked with * are mandatory</h5>
        </div>
        <div>
            <label htmlFor="fname"><h4>How did you get to know about our program?*</h4></label>
            <input type="text" id="fname" name="firstname" placeholder="Type something..."/>
            
            <label htmlFor="dob"><h4>What is your goal if you clear qualifier exam?*</h4></label>
            <input type="text" id="dob" name="dateofbirth" placeholder="Type something..."/>
             
            <label htmlFor="dob"><h4>How many hours a week will you be able to spend on our courses?*</h4></label>
            <input type="text" id="dob" name="dateofbirth" placeholder="Type something..."/>

            <label htmlFor="country"><h4>What bandwidth internet do you use?*</h4></label>
              <select id="country" name="country">
                
                <option value="australia">India</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
           
           
           
            
            
            <label htmlFor="gender"><h4>What device(s) do you use to access internet?*</h4></label>
            <label className="container"><h4>Laptop</h4>
                <input type="checkbox" defaultChecked="checked"/>
                <span className="checkmark"></span>
              </label>
              
              <label className="container"><h4>Desktop</h4>
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
              
              <label className="container"><h4>Tablet</h4>
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>

              <label className="container"><h4>Smartphone</h4>
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
              
              <label htmlFor="subject"><h4>Why do you want to join our program?*</h4></label>
              <textarea id="subject" name="subject" placeholder="Type something..." style={{height:"200px"}}></textarea>
    
               <Button link={"upload"}/>


        </div>
        </div>
    
    )
}

export default Additional;