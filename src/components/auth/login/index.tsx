import { TextField } from '@mui/material';


const LoginPage = () => {
  const name = 'Alex';

  return (
    <div>
      <TextField label="Email" variant="outlined" placeholder='Your email'/>

    </div>
  )
}

export default LoginPage;