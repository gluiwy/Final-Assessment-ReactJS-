import React from 'react';
import Tasks from './components/Tasks';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  };

  return (
    <div style={containerStyle}>
      <h1>Tasks Tracker</h1>
      <Tasks />
    </div>
  );
};

export default App;