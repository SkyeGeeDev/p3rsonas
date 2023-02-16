import logo from './logo.svg';
import './App.css';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar/navbar';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <NavBar/>
      </div>
    </ChakraProvider>
  );
}

export default App;
