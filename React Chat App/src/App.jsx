import React, { useState, useRef } from 'react';
import Auth from './components/Auth';
import Chat from './components/Chat';

import Cookies from 'universal-cookie';
import { async } from '@firebase/util';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import './Styles/App.css';

const cookies = new Cookies();

const App = () => {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'));

  const [room, setRoom] = useState();

  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove('auth-token');
    setIsAuth(false);
    setRoom(null);
  };

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <>
      {room ? (
        <Chat room={room} />
      ) : (
        <div className='room'>
          <label>Enter Room Name</label>
          <br />
          <input ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>
            Enter Chat
          </button>
        </div>
      )}
      <div className='sign-out'>
        <button onClick={signUserOut}>Sign Out</button>
      </div>
    </>
  );
};

export default App;
