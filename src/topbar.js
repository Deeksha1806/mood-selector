// TopBar.js
import React from 'react';

const TopBar = () => {
  const style = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#f4f4f4',
    padding: '10px 0',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    zIndex: 1,
  };

  return <div style={style}>🌤️ Mood Journal</div>;
};

export default TopBar;
