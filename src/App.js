import React, { useEffect } from 'react'
import './App.css'
import {db} from './firebase'


function App() {
  useEffect(() => {
    return () => {
      db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
      });
    }
  }, [])

  return (
      <div className="App">

        <button onClick={() => {
          db.collection('users').add({
            first: 'shai',
            last: 'Lovelace',
            born: 1815
          })
              .then(function (docRef) {
                console.log('Document written with ID: ', docRef.id)
              })
              .catch(function (error) {
                console.error('Error adding document: ', error)
              })
        }}>click
        </button>
      </div>
  )
}

export default App
