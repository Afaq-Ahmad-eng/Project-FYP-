import React from 'react';
import "./Trip.css";

function Tripdata(props) {
  return (
    <div className='t-card'>  {/* ✅ Apply Correct Class */}
      <div className='t-image'>  {/* ✅ Apply Correct Class */}
        <img src={props.image} alt='Trip' />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default Tripdata;
