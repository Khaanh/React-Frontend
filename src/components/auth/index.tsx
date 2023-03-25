import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import './style.scss';
import { Box } from '@mui/material';
import axios from 'axios';
import { instance } from '../utils/axios';

const AuthRootComponent: React.FC = (): JSX.Element => {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (location.pathname === './login') {
      const userData = {
        email,
        password,
      }
      const user = await instance.post('auth/login', userData);

    } else {
      if (password === repeatPassword) {
        const userData = {
          email,
          password,
          repeatPassword,
          firstName,
          username,
        }

        const newUser = await instance.post('auth/register', userData);
        console.log(userData);
      } else {
        throw new Error(`Your password doesn't match`);
      }

    }

  }

  return (
    <div className="root">
      <form className="form" onSubmit={handleSubmit}>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          maxWidth={640}
          margin='auto'
          padding={5}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
        >
          {
            location.pathname === '/login' ? <LoginPage setEmail={setEmail} setPassword={setPassword} /> : location.pathname === '/register' ?
              <RegisterPage
                setEmail={setEmail}
                setPassword={setPassword}
                setRepeatPassword={setRepeatPassword}
                setFirstName={setFirstName}
                setUsername={setUsername} />
              : null
          }
        </Box>
      </form>
    </div>
  )

}

export default AuthRootComponent;