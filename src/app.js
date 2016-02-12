import React from 'react';

export default function App ({ children }) {
  return (
      <div style={styles.container}>
        <div className="statusbar-overlay"></div>
        <div id="views" className="views">
            { React.cloneElement(children || <div style={styles.container}/>, {}) }
        </div>
      </div>
  );
}

var styles = {
  container: {
    height: '100%',
    width:'100%'
  }
};
