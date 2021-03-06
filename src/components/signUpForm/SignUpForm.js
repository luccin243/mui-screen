import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Logo from './../../components/logo/Logo';
import { UploadImage, CustomInput } from '../../components';
import { FaPhoneAlt } from 'react-icons/fa';
import { BiAt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Button, Typography, Paper, InputAdornment } from '@mui/material';

const Root = styled(Paper)({
  maxWidth: '100%',
  margin: 'auto',
});

const LogoContainer = styled('div')(({ theme }) => ({
  width: '40%',
  margin: `${theme.spacing(4)} auto`,
}));

const TextDescription = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const SubmitButton = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: `${theme.spacing(4)} auto`,
}));

const Footer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: `${theme.spacing(4)} auto`,
}));

const CustonLink = styled(Link)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  fontWeight: 600,
  textDecoration: 'none',
  color: theme.palette.primary.main,
}));

const SignUpForm = () => {
  const [preview, setPreview] = useState(null);
  const handelChange = (props) => (event) => {
    event.preventDefault();
    if (props === 'profile') {
      setPreview(URL.createObjectURL(event.target.files[0]));
    }
    console.log({ [props]: event.target.value });
  };

  return (
    <Root elevation={0}>
      <CssBaseline />
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Typography variant='h1' component='h1' align='center'>
        Create an Account
      </Typography>
      <TextDescription
        variant='body1'
        component='p'
        align='center'
        gutterBottom
      >
        Let's get you all set up so you can start managing your content
      </TextDescription>
      <UploadImage handelChange={handelChange('profile')} preview={preview} />
      <CustomInput
        placeholder='First Name'
        handelChange={handelChange('firstName')}
      />
      <CustomInput
        placeholder='Last Name'
        handelChange={handelChange('lastName')}
      />
      <CustomInput
        placeholder='Phone'
        handelChange={handelChange('phone')}
        startAdornment={
          <InputAdornment position='end'>
            <FaPhoneAlt />
          </InputAdornment>
        }
      />
      <CustomInput
        placeholder='Email'
        handelChange={handelChange('email')}
        startAdornment={
          <InputAdornment position='end'>
            <BiAt />
          </InputAdornment>
        }
      />
      <CustomInput
        placeholder='Password'
        handelChange={handelChange('password')}
      />
      <CustomInput
        placeholder='Confirm Password'
        handelChange={handelChange('confirmPassword')}
      />
      <SubmitButton>
        <Button variant='contained'>Register</Button>
      </SubmitButton>
      <Footer>
        <Typography variant='body1' component='p'>
          Already have an account ?
        </Typography>
        <CustonLink to='/login'>Sign In</CustonLink>
      </Footer>
    </Root>
  );
};

export default SignUpForm;
