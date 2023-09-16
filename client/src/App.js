import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [udata, setData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json()) // Return the parsed JSON data
      .then((data) => {
        
        setData(data.users);
        
        
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      {udata.map((user, i) => (
        <p key={i}>{user}</p>
      ))}
    </div>
  );
}

export default App;
