import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import { FirebaseConnect } from '../../FirebaseConnect';
import ListContact from './components/ListContact';

const Detail = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    const connectData = firebase.database().ref('Contact');
    connectData.on('value', (data) => {
      const arr = [];
      data.forEach((e) => {
        arr.push({
          id: e.key,
          name: e.val().name,
          email: e.val().email,
          sub: e.val().sub,
          message: e.val().message,
          date: e.val().date
        });
      });
      setContact(arr);
    });
  }, []);

  return (
    <div className="container" style={{ padding: '20px' }}>
      <ListContact contact={contact} />
    </div>
  );
};

export default Detail;
