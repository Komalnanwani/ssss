import React, { useState,useEffect } from 'react';

const Login = ({ onLogin, disabled, initialUsername, initialPassword }) => {
  const [username, setUsername] = useState(initialUsername || '');
  const [password, setPassword] = useState(initialPassword || '');
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false); // New state for edit mode

  useEffect(() => {
    if (isEditing) {
      setUsername(initialUsername || '');
      setPassword(initialPassword || '');
    }
  }, [isEditing, initialUsername, initialPassword]);
  const handleLogin = () => {
    if (!username || !password) {
      setError("Please enter Username and Password");
      return;
    }
    setError('');
    setUsername('');
    setPassword('');
    onLogin({ username, password });
  };

  return (
    <div className="container">
      <div className="left-side">
        <div className="logo">
          <img src="//login.salesforce.com/img/logo214.svg" alt="Logo" />
        </div>
        <div className="login-form">
          <div id="main">
            <form>
              <label>Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder=""
                disabled={!isEditing && disabled} // Disable input unless in edit mode
              />
              <label>Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=""
                disabled={!isEditing && disabled} // Disable input unless in edit mode
              />
              {error && <p>{error}</p>}
              <input type="button" id="btn1" value="Log In" onClick={handleLogin} />
              <input type="checkbox" id="btn2" value="remember me" /> Remember me
              <p id="hr"></p>
              <div>
                <a href="" id="link1">
                  Forgot Your Password
                </a>
                <a href="" id="link2">
                  Use Custom Domain
                </a>
              </div>
            </form>
          </div>
          <div className="foot">
            <p>Not a customer?</p>
            <input type="button" id="trybtn" value="Try for Free" />
          </div>
          <p id="footer">© 2024 Salesforce, Inc. All rights reserved. | Privacy</p>
        </div>
      </div>
    </div>
  );
};


export default Login;
