import React from 'react';

export default function Toaster({ message, show }) {
  if (!show) return null; 

  return (
    <div
      className="toast show position-fixed bg-success text-white"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={{
        top: '20px', 
        right: '20px', 
        zIndex: 9999, 
        minWidth: '300px',
      }}
    >
      <div className="toast-body">
        {message}
      </div>
    </div>
  );
}
