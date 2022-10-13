import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, GithubAuthProvider } from 'firebase/auth'
import app from './firebase/firebase.init'
import { useState } from 'react';


const auth = getAuth(app)
function App() {
  const [users, setUsers] = useState({})
  const {uid, displayName, } = users
  const providerGoogle = new GoogleAuthProvider()
  const providerGit = new GithubAuthProvider();

  const handelGoogleSigninGoogle = () => {
    signInWithPopup(auth, providerGoogle )
      .then(result => {
        const user = result.user;
        setUsers(user)
      })
      .catch(error => {
        console.error('error: ', error)
      })
  }

  const handelGoogleSigninGit = () => {
    signInWithPopup(auth, providerGit )
      .then(result => {
        const user = result.user;
        setUsers(user)
      })
      .catch(error => {
        console.error('error: ', error)
      })
  }

  const handelGoogleSignOut = () => {

    signOut(auth).then(() => {
      setUsers({})
    }).catch((error) => {
      console.error('error: ', error)
    });
  }
  return (
    <div className="App">
      {!uid ?
        <>
          <button onClick={() => handelGoogleSigninGoogle()}>sing in with google</button>
          <button onClick={() => handelGoogleSigninGit()}>sing in with github</button>
        </>
        :
        <button onClick={handelGoogleSignOut}>sing Out</button>
      }
      { uid && //conditonal rendaring using truthy value
        <div>
          <h1>User Name : {displayName}</h1>
        </div>
      }
      {/* <img src={photoURL} alt='profile image' /> */}
    </div>
  );
}

export default App;
