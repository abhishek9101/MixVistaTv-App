// Popup.js

import React, { useState } from 'react';

const Popup = () => {
  const [isPopupVisible, setPopupVisibility] = useState(true);

  const closePopup = () => {
    setPopupVisibility(false);
  };

  return (
    <>
      {isPopupVisible && (
        <div className="popup-container">
          <img src="https://crictoday.com/wp-content/uploads/2024/01/ind-vs-eng.jpg" alt="Popup Image"/>
          <p><strong>Watch</strong> the live <strong>All India vs. England</strong> Test match on <strong>Sports 1</strong>.</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </>
  );
};

export default Popup;
