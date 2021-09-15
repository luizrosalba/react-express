import React, {useState, useEffect} from "react";
import logo from './logo.svg';

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import * as req from "./api/AppRequests";
import './App.css';

const App = () => {
  const [alive, setAlive] = useState(false);

  useEffect(() => {
      let serverAliveReq = req.serverAlive();
      serverAliveReq.then(
        result => {
          setAlive(result)
        }
      )

      req.promise.then( resultado => {
          console.log("Usando promise", resultado); 
        }, 
        erro => {
          console.log(erro); 
        }
      );
    
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {alive?
          <div>Server Alive</div>
          :
          <div>Server not Alive </div>
        }
      <>
        <Button variant="primary">React Bootstrap is On! </Button>{' '}
      </>     
      </header>
    </div>
  );
}

export default App;
