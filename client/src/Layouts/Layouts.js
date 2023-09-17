import React from 'react';
import NavBar from './NavBar';
import NavDown from './NavDown';

function Layout({ children }) {
  return (
    <div>
    <NavBar />
      <main>
        {children} 
      </main>
      <NavDown />
    </div>
  );
}

export default Layout;