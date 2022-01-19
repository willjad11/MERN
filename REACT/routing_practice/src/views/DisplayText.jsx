import React from 'react';
import { useParams } from 'react-router-dom'

const DisplayText = () => {
  const { desiredString } = useParams();
  const outputDisplay = isNaN(desiredString) ? "Your word is: " + desiredString : "Your number is: " + desiredString;
  return (
    <h1>{outputDisplay}</h1>
  );
};

export default DisplayText;