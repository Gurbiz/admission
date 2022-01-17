import React from 'react';
import './education.css';
import Button from './Button';


function Education() {
    return(
        
        <div className="column middle">
        <div>
          <h4>APPLICATION FORM</h4>
          <h2>Educational Details</h2>
          <h5>All Fields marked with * are mandatory</h5>
        </div>
        <div>
           
            
            <label htmlFor="fname"><h4>Name of School*</h4></label>
            <input type="text" id="fname" name="firstname" placeholder="Type something..."/>
            
              
              <label htmlFor="country"><h4>School Board*</h4></label>
              <select id="country" name="country">
                
                <option value="australia">CBSE</option>
                <option value="canada">ICSE</option>
                <option value="usa">State Board</option>
              </select>

              <label htmlFor="ID"><h4>Type of School*</h4></label>
         
              <select id="country" name="country" placeholder="Select from the list">
                <option value="aadhaar">Private</option>
                <option value="pan">Public</option>
              </select> 
              

              <label htmlFor="ID"><h4>Country of Schooling*</h4></label>
         
              <select id="country" name="country" placeholder="Select option">
                <option value="aadhaar">India</option>
                <option value="pan">Canada</option>
                <option value="pan">USA</option>
              </select>
                
              <label htmlFor="ID"><h4>State/Province of Schooling</h4></label>
         
              <select id="country" name="country" placeholder="Select option">
                <option value="aadhaar">India</option>
                <option value="pan">Canada</option>
                <option value="pan">USA</option>
              </select>
           
              

              

            <label htmlFor="ID"><h4>City/Town of Schooling</h4></label>
              <h5 style={{color:"#0476d0"}}>If the exact place of schooling is not listed, please select the nearest City/Town from the list.</h5>
              <select id="country" name="country" placeholder="Select from the list">
                <option value="aadhaar">New Delhi</option>
                <option value="aadhaar">Chandigarh</option>
                <option value="pan">Noida</option>
                <option value="voter">Gurugram</option>
                <option value="voter">Shimla</option>
              </select>

              <label htmlFor="ID"><h4>Year of Passing Class 12 or Equivalent Exam*</h4></label>
         
              <select id="country" name="country" placeholder="Select option">
                <option value="aadhaar">2020</option>
                <option value="pan">2019</option>
                <option value="pan">2018</option>
              </select>
           

              
              
              
              <label className="container"><p style={{fontFamily:"sans-serif"}}>I hereby declare that all class 12/equivalent information furnished above is correct.I agree that if I clear the Qualifier Process and Exam,I will upload my Class 12/equivalent mark sheet for verification while registering for the Foundational Level of the Program.If any of the details furnished above is found to be false,I agree to have my application/admission cancelled or terminated.</p>
                <input type="checkbox" defaultChecked="checked"/>
                <span className="checkmark"></span>
              </label>

              <Button link={"contact"}/>
    


        </div>
        </div>
    
    
        
    )
}

export default Education;