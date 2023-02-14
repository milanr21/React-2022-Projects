import React from 'react';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { AiOutlineGooglePlus } from 'react-icons/all';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Auth = (props) => {
  const { setIsAuth } = props;

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set('auth-token', result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='auth'>
      <div className='auth-text'>
        <p>Find someone new!</p>
        <p>Meet and chat to people near you</p>
        <button onClick={signInWithGoogle}>
          <AiOutlineGooglePlus className='icon' /> Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Auth;
