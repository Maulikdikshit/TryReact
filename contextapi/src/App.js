import React from 'react';
import Navbar from './components/Navbar';
import Todolist from './components/Todolist';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext'; 

function App() {
  return (
    <div className="App">
      <div className='ui raised very padded text container segment'>
       <AuthContextProvider>
       <ThemeContextProvider>
          <Navbar></Navbar>
          <Todolist></Todolist>
       </ThemeContextProvider>  
       </AuthContextProvider>      
      </div>
    </div>
  );
}

export default App;
