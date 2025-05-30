import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { ref, set } from 'firebase/database';

export default function LoginOffcanvas() {
  const [isSignup, setIsSignup]   = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName,  setLastName]  = useState('');
  const [email,     setEmail]     = useState('');
  const [password,  setPassword]  = useState('');
  const [error,     setError]     = useState('');
  const [message,   setMessage]   = useState('');
  const [user,      setUser]      = useState(null);

  // watch auth state
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => setUser(u));
    return unsub;
  }, []);

  // handle login or signup
  const handleSubmit = async e => {
    e.preventDefault();
    setError(''); setMessage('');

    try {
      if (isSignup) {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        await set(ref(db, `users/${cred.user.uid}`), {
          firstName,
          lastName,
          email,
          createdAt: Date.now()
        });
        setMessage('Signup successful! You can now log in.');
        setIsSignup(false);
        setFirstName(''); setLastName(''); setEmail(''); setPassword('');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage('Login successful!');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMessage('You have been logged out.');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="userOffcanvas"
      aria-labelledby="userOffcanvasLabel"
    >
      <div className="offcanvas-header">
        <h5 id="userOffcanvasLabel">
          {user
            ? 'Account'
            : isSignup
              ? 'Sign Up'
              : 'Login'
          }
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>

      <div className="offcanvas-body">
        {message && <div className="alert alert-success">{message}</div>}
        {error   && <div className="alert alert-danger">{error}</div>}

        {user ? (
          <div className="text-center">
            <p>
              Logged in as{' '}
              <strong>{user.email}</strong>
            </p>
            <button
              className="btn btn-outline-secondary w-100"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <>
                <div className="mb-3">
                  <label htmlFor="firstNameInput" className="form-label">
                    First Name
                  </label>
                  <input
                    id="firstNameInput"
                    type="text"
                    className="form-control"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="lastNameInput" className="form-label">
                    Last Name
                  </label>
                  <input
                    id="lastNameInput"
                    type="text"
                    className="form-control"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    required
                  />
                </div>
              </>
            )}

            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">
                Email address
              </label>
              <input
                id="emailInput"
                type="email"
                className="form-control"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">
                Password
              </label>
              <input
                id="passwordInput"
                type="password"
                className="form-control"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 mb-2"
            >
              {isSignup ? 'Sign Up' : 'Login'}
            </button>
          </form>
        )}

        {!user && (
          <div className="text-center">
            {isSignup ? (
              <p>
                Already have an account?{' '}
                <button
                  className="btn btn-link p-0"
                  onClick={() => setIsSignup(false)}
                >
                  Login
                </button>
              </p>
            ) : (
              <p>
                Don't have an account?{' '}
                <button
                  className="btn btn-link p-0"
                  onClick={() => setIsSignup(true)}
                >
                  Sign Up
                </button>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
