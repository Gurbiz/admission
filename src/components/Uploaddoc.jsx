import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import './Uploaddoc.css'
import Buttone from './Buttone';

const Input = styled('input')({
  display: 'none',
});

const drawerWidth = 240;
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function UploadButtons() {
  return (
      <div className='padd'>
        <div>
            <h1>
                APPLICATION FORM
            </h1>
            <h2>
                Upload Document
            </h2>
            <h3>
                All the fields marked with * are mandatory
            </h3>
        </div>
        <h3>
            Applicant's Photograph*
        </h3>
    <p>
    File should be in JPEG / JPG format only. Accepted file size: minimum 50KB, upto 150KB. Please upload a
    recent, professional passport size photo with a light / white background. Selfies, photos cropped from other
    photos shall be rejected.
    </p>
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
    </Stack>
    <h3>
            Applicant's Signature*
        </h3>
    <p>
    File should be in JPEG / JPG format only. Accepted file size: minimum 4KB, upto 150KB.
    </p>
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
    </Stack>
    <h3>
            Applicant's ID*
        </h3>
    <p>
    Please upload a scan of the ID card you have provided in the application form. File should be in JPEG / JPG /
    PDF format only. Accepted file size: minimum 50KB, upto 2MB
    </p>
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
    </Stack>
    <div className='upspace'>
        <div>
        <Checkbox {...label} defaultChecked />
        </div><div>
        <Typography paragraph>
        I hereby declare that all files uploaded above are correct. If any of the files is found to be
false, I agree to have my application / admission rejected or terminated.
          </Typography> 
          </div>
          </div>
          <Buttone link={"terms"}/>
    </div>
  );
}
