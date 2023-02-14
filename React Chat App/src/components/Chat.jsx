import React, { useState, useEffect } from 'react';
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import { async } from '@firebase/util';
import { auth, db } from '../firebase-config';
import '../Styles/Chat.css';
import { format } from 'date-fns';

const Chat = (props) => {
  const { room } = props;
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const messageRef = collection(db, 'messages');

  useEffect(() => {
    const queryMessages = query(
      messageRef,
      where('room', '==', room),
      orderBy('createdAt')
    );
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newMessage === '') return;

    await addDoc(messageRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });
  };

  return (
    <div className='chat-app'>
      <div className='header'>
        <h1>Welcome to {room}</h1>
      </div>
      <div className='messages'>
        {messages.map((message) => (
          <div className='message' key={message.id}>
            <span className='user'>{message.user} </span>
            {message.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className='new-message-form'>
        <input
          className='new-message-input'
          placeholder='Type your message here.....'
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button type='submit' className='send-button'>
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
