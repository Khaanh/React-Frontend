import { Fragment } from 'react';
import { TextField, Button, Typography } from '@mui/material';


const LoginPage = (props: any) => {
  const { setPassword, setEmail } = props;

  return (
    <Fragment>
      <Typography variant="h2" fontFamily='Popins' textAlign='center'>Authorization</Typography>
      <Typography variant="body1" fontFamily='Popins' textAlign='center' marginBottom={3}>Enter your email and password</Typography>

      <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Your email' onChange={(e)=> setEmail(e.target.value) } />
      <TextField fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Your password' onChange={(e)=> setPassword(e.target.value)}/>
      <Button type='submit' sx={{ fontFamily: 'Popins', marginTop: 2, marginBottom: 2, width: '60%' }} variant="contained">Login</Button>

      <Typography variant="body1" sx={{fontFamily: 'Popins'}}>
        Don't have an Account? <span className='incitingText'>Registration</span>
      </Typography>
    </Fragment>
  )
}

export default LoginPage;