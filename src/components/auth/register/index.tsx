import { Fragment } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { IPropsRegister } from '../../../common/types/auth';

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
  const { setEmail, setPassword, setRepeatPassword, setFirstName, setUsername } = props;

  return (
    <Fragment>
      <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Registration</Typography>
      <Typography variant="body1" fontFamily='Poppins' textAlign='center' marginBottom={3}>Let’s begin the adventure!</Typography>

      <TextField fullWidth={true} margin='normal' label="Name" variant="outlined" placeholder='Your name' onChange={(e) => setFirstName(e.target.value)} />
      <TextField fullWidth={true} margin='normal' label="Username" variant="outlined" placeholder='Your username' onChange={(e) => setUsername(e.target.value)} />
      <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Your email' onChange={(e) => setEmail(e.target.value)} />
      <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Your password' onChange={(e) => setPassword(e.target.value)} />
      <TextField type='password' fullWidth={true} margin='normal' label="Repeat password" variant="outlined" placeholder='Repeat your password' onChange={(e) => setRepeatPassword(e.target.value)} />
      <Button type='submit' sx={{ fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '60%' }} variant="contained">Registration</Button>

      <Typography variant="body1" sx={{ fontFamily: 'Poppins', }}>
        Don't have an Account? <span className='incitingText'>Authorization</span>
      </Typography>
    </Fragment>
  )
}

export default RegisterPage;