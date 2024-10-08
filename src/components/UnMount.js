import React from 'react';

export default function UnMount({ toggleState }) {
  return (
    <>
      <button className="btn btn-primary" onClick={toggleState}>
        Toggle
      </button>
    </>
  );
}
