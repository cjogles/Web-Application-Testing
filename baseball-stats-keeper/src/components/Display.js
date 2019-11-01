import React from 'react';

const Display = (props) => {
  return (
    <div>
        // for the at-bat,
        // should be updated when user records activity on the Dashboard component
        <p>This is the number of balls</p>
        {props.ballsCount}
        <p>This is the number of strikes</p>
        {props.strikeCount}
    </div>
  );
}

export default Display;