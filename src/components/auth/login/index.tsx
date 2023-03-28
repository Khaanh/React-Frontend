import { Fragment } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';


const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const { setPassword, setEmail, navigate } = props;

  return (
    <Fragment>
      <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Authorization</Typography>
      <Typography variant="body1" fontFamily='Poppins' textAlign='center' marginBottom={3}>Enter your email and password</Typography>

      <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Your email' type='email' onChange={(e) => setEmail(e.target.value)} />
      <TextField fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Your password' type='password' onChange={(e) => setPassword(e.target.value)} />
      <Button type='submit' sx={{ fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '60%' }} variant="contained">Login</Button>

      <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
        Don't have an Account? <span className='incitingText' onClick={() => navigate('/register')}>Registration</span>
      </Typography>
    </Fragment>
  )
}

export default LoginPage;