import React, { useState} from 'react';
import './App.css';
import Login from './components/Login';
function App() {
  const [userData, setUserData] = useState(null);
  const [credentials, setCredentials] = useState([]);
  const [loginDisabled, setLoginDisabled] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleLogin = (data) => {
    setUserData(data);
    setCredentials([...credentials, data]);
    setLoginDisabled(true);
  };

  const handleEdit = (index, newData) => {
    const updatedCredentials = [...credentials];
    updatedCredentials[index] = newData;
    setCredentials(updatedCredentials);
    setLoginDisabled(false);
    setIsEditing(true);
    setUserData(newData);
  };

  const handleDelete = (index) => {
    const updatedCredentials = [...credentials];
    updatedCredentials.splice(index, 1);
    setCredentials(updatedCredentials);
    setLoginDisabled(false);
    setIsEditing(false);
  };

  return (
    <div className="container">
      <div className="left-side">
        <Login
          onLogin={handleLogin}
          disabled={loginDisabled}
          initialUsername={userData ? userData.username : ''}
          initialPassword={userData ? userData.password : ''}
        />
      </div>
      <div className="right-side">
        <div className="cards-container">
          {userData && credentials.length === 0 && (
            <div className="card">
              <div id="center">
                <h2>Credentials</h2>
                <p>Username: {userData.username}</p>
                <p>Password: {userData.password}</p>
                <button onClick={() => handleEdit(credentials.length - 1, userData)}>Edit</button>
                <button onClick={() => handleDelete(credentials.length - 1)}>Delete</button>
              </div>
            </div>
          )}
          {credentials.map((cred, index) => (
            <div className="card" key={index}>
              <div id="center">
                <h2>Credentials</h2>
                <p>Username: {cred.username}</p>
                <p>Password: {cred.password}</p>
                <button onClick={() => handleEdit(index, cred)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
