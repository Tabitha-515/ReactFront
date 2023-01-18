import React, { useState, useEffect } from 'react';
import axios from 'axios';

//display all users
export default function ShowUsers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/users')

    
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

 

  function handlePatch(updatedData) {
    axios.patch('https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/user/{id}', updatedData)

   
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data && data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={() => handlePatch({ name: 'new name' })}>
        Update Name
      </button>
    </div>
  );
}

