import { Fragment } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const RegisterPage = () => {
  return (
    <Fragment>
      <Typography variant="h2" fontFamily='Popins' textAlign='center'>Registration</Typography>
      <Typography variant="body1" fontFamily='Popins' textAlign='center' marginBottom={3}>Let’s begin the adventure!</Typography>

      <TextField fullWidth={true} margin='normal' label="Name" variant="outlined" placeholder='Your name' />
      <TextField fullWidth={true} margin='normal' label="Username" variant="outlined" placeholder='Your username'/>
      <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Your email'/>
      <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Your password' />
      <TextField type='password' fullWidth={true} margin='normal' label="Repeat password" variant="outlined" placeholder='Repeat your password'/>
      <Button sx={{ fontFamily: 'Popins', marginTop: 2, marginBottom: 2, width: '60%' }} variant="contained">Registration</Button>

      <Typography variant="body1" sx={{ fontFamily: 'Popins', }}>
        Don't have an Account? <span className='incitingText'>Authorization</span>
      </Typography>
    </Fragment>
  )
}

export default RegisterPage;