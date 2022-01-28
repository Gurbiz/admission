import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import './TndC.css';
// import { Paper } from '@mui/material';
// import styled from '@emotion/styled';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

function TndC ()  {
  return <div>
    <Grid Container xs="auto">
    <div className='container'>
        <Typography variant='h4'>
            APPLICATION FORM
            <Typography variant='h5'>
                Terms And Conditions
            </Typography>
        </Typography>
        </div>
        <Grid className='container'>
        <div className='spacing'>
        <Checkbox {...label} defaultChecked />
        <Typography>
            I understand and agree I should use the same email id throughout the programme and 
            during a term, for enrolling to a course and paying the fees. Assignments submitted using any 
            other email id will not be taken into consideration towards final consolidated score & 
            certification. The responsibility of email id being valid until the course run is over is mine.
        </Typography>
        </div>
        <div className='spacing'>
        <Checkbox {...label} defaultChecked />
        <Typography>
            I hereby declare that I have carefully read the instructions and all the particulars stated in 
            this application form are true and correct to the best of my Knowledge and belief. If the 
            information provided is found false/ incorrect, I shall abide by any action and/ or decision
            taken by MRSPTU, which may even be cancellation or withdraw of the diploma/degree
            certificates awarded.
        </Typography>
        </div>
        <div className='spacing'>
        <Checkbox {...label} defaultChecked />
        <Typography>
            I understand and agree that disciplinary action may be initiated against me if I induldge in 
            any Academic Malpractices and/or Non-Academic Malpractices while I am enrolled in the 
            Program.
        </Typography>
        </div>
        <div className='butn'>
        <div>
        <Button variant='contained'>Back</Button>
        </div>
        <div>
        <Button variant='contained'>Next</Button>
        </div>
        </div>
        </Grid>
    </Grid>
  </div>;
};

export default TndC;
