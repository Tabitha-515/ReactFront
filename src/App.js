
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [showEditMeBtn, setShowEditMeBtn] = useState(false);
// GET users
  useEffect(() => {
    axios.get('https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/users')

    
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

 
// PATCH user
  function handlePatch(item) {
    let userData = {...user, email:item.email, occupation:item.occupation, bio:item.bio}
    axios.patch(`https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/user/${item.id}`, userData)
      .then(response => {
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  }

  //handle new change
  function handleChange(event) {
    event.preventDefault();
    setUser({name : event.target.value})
  }

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data && data.map(item => (
          <>
          <li key={item.id}>{item.name}</li>
          <span>
            {showEditMeBtn ? (
              <>
              <input name = "username" type="text" onChange = {handleChange} />
              <button onClick={() => handlePatch(item)}>Edit User</button>
              </>
            ) : (
              <button onClick={() => setShowEditMeBtn(true)}>
                Update Name
               </button>
            )}
            
          </span>
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;
