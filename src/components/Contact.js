import React from 'react';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import './Contact.css';
import Button from './Button';
// import { Stack } from '@mui/material';



const Contact = () => {
    
    const initialvalues = { altEmail: '', mobileNo: '', country: '', address1: '', pin: '' };
    const [formValues, setFormValues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {}
        const regex = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/gm;
        const regex2 = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/gm;

        if (!regex2.test(values.altEmail)) {
            errors.altEmail = 'Invalid email format'
        }
        if (!values.mobileNo) {
            errors.mobileNo = 'Mobile Number is required';
        } else if (!regex.test(values.mobileNo)) {
            errors.mobileNo = 'Mobile Number must contain 10 digits';
        }
        if (!values.country) {
            errors.country = 'Country name is required';
        }
        if (!values.address1) {
            errors.address1 = 'Address is required';
        }
        if (!values.pin) {
            errors.pin = 'PIN code is required';
        }

        return errors;
    }

    return (
        <div className='column middle'>
            <form onSubmit={handleSubmit}>
            <div className="content">
                <div>
                    <h4>APPLICATION FORM</h4>
                    <h2>Contact Details</h2>
                    <h5>All fields marked with * are compulsory</h5>
                </div>
                <div>
                    <div className="field">
                    <label htmlFor="alt-email"><h4>Alternate Email Address</h4></label>
                    <input 
                    type="text" 
                    id='alt-email' 
                    name='alt-email' 
                    placeholder='Alternate email address' 
                    value={formValues.altEmail}
                    onChange={handleChange}
                    />
                    </div>
                    <p style={{ color: 'red', fontSize: '14px' }}>{formErrors.altEmail}</p>
                    <div className="field">
                    <label htmlFor="mobile"><h4>Mobile Phone Number*</h4></label>
                    <div className='c-code'>
                        <Select name="country" id="code">
                            <MenuItem value="India" >+91</MenuItem>
                            <MenuItem value="Kenya" >+11</MenuItem>
                            <MenuItem value="Uganda" >+18</MenuItem>
                            <MenuItem value="Somalia" >+33</MenuItem>
                        </Select>
                        <input 
                        type="text" 
                        id='mob-number' 
                        placeholder='Enter mobile number' 
                        value={formValues.mobileNo}
                        onChange={handleChange}
                        />
                    </div>
                    </div>
                    <p style={{ color: 'red', fontSize: '14px' }}>{formErrors.mobileNo}</p>
                    <div className="field">
                    <label htmlFor="country"><h4>Country*</h4></label>
                    <input 
                    type="text" 
                    id='country' 
                    name='country' 
                    placeholder='Enter your country' 
                    value={formValues.country}
                    onChange={handleChange}
                    />
                    </div>
                    <p style={{ color: 'red', fontSize: '14px' }}>{formErrors.country}</p>
                    <label htmlFor="country"><h4>State / Province</h4></label>
                    <input type="text" id='country' name='country' placeholder='Enter your state' />
                    <label htmlFor="country"><h4>City / Town</h4></label>
                    <input type="text" id='country' name='country' placeholder='Enter your city' />
                    <div className="field">
                    <label htmlFor="country"><h4>House No., Building Name, Street Address*</h4></label>
                    <input 
                    type="text" 
                    id='country' 
                    name='country' 
                    placeholder='Enter Address...' 
                    value={formValues.address1}
                    onChange={handleChange}
                    />
                    </div>
                    <p style={{ color: 'red', fontSize: '14px' }}>{formErrors.address1}</p>
                    <label htmlFor="country"><h4>Street Address Line 2</h4></label>
                    <input type="text" id='country' name='country' placeholder='Enter Address...' />
                    <div className="field">
                    <label htmlFor="country"><h4>PIN Code*</h4></label>
                    <input 
                    type="text" 
                    id='country' 
                    name='country' 
                    placeholder='Enter PIN Code...' 
                    value={formValues.pin}
                    onChange={handleChange}
                    />
                    </div>
                    <p style={{ color: 'red', fontSize: '14px' }}>{formErrors.pin}</p>
                </div>
                <div className="consent">
                    <p><h4>Communication via SMS/Email/Whatsapp: I expressly consent to receive academic and promotion messages from KEEWE SOLUTIONS, on the mobile phone number and e-mail id I provide via this application form.</h4></p>
                </div>
                <div className="button">
                    <Stack spacing={2} direction="row">
                        {/* <Button variant="contained" >Back</Button> */}
                        <Button link={"additional"}/>
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default Contact;
