import React from 'react';
import './AppHeader.css'; // Import your CSS file for styling

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="logo-placeholder">
        {/* Add your logo here */}
        <img src="./thumbnail/mixvistatvlogo.jpg" alt="Logo" />
      </div>
      <h1 className="app-name">MixVistaTV</h1>
    </header>
  );
};

export default AppHeader;
