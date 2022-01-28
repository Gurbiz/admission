import React from "react";
import { Grid, Typography,Button } from '@mui/material';
import Uploadcomp from "./Uploadcomp";
import './Uploaddoc.css';

const Uploaddoc = () => {
  return <>
              <Grid container xs='auto' style={{ display:'block', margin:'8%' }}>
    <Grid>
      <Typography>
        <Typography variant='h5'>
          APPLICATION FORM
        </Typography>
        <Typography variant='h3'>
          Upload Document
        </Typography>
        <Typography variant='h5'>
          All Fields Marked With * Are Mandatory
        </Typography>
        <Grid style={{margin:'8%', width:'60%'}}>
        <Typography variant="h5" className="apli">
          Applicant's Photograph*
        </Typography>
        <Typography variant="p" className="pra" style={{color:"blue"}}>
            File should be in JPEG/JPG format only. Accepted file size: minimum 50KB, upto 150KB. Please upload a 
            recent, professional passport size photo with a light/ white background. Selfies, photos cropped from other
            photos shall be rejected.
            <Uploadcomp />
        </Typography>
        <Typography variant="h5" className="apli">
          Applicant's Signature*
        </Typography>
        <Typography variant="p" style={{color:"blue"}}>
           Files should be in JPEG /JPG format only. Accepted files size: minimum 4KB, upto 150kb.
           <Uploadcomp />
           </Typography> 
           <Typography variant="h5" className="apli">
          Applicant's ID*
        </Typography>
        <Typography variant="p" style={{color:"blue"}}>
           Please upload a scan of thge ID card you have provided in the application form. File should be in JPEG/JPG/PDF format only. Accepted file size : minimum 50KB,upto 2MB
           <Uploadcomp />
           </Typography> 
           <Typography variant="h6" className="apli1">
          I hereby declare that all files uploaded above are correct . if any of the files is found to be false , I agree to have my application /admission rejected or terminated.
           </Typography>
           <Typography variant="h6" className="tut">
           <div className="but">
           <div >
          <Button variant="contained" >
                Back
          </Button>
          </div>
          <div>
          <Button variant="contained">
                Next
          </Button>
          </div>
          </div>
           </Typography>
           </Grid>
           
      </Typography>
    </Grid>
    </Grid>
       </>;
};

export default Uploaddoc;
