import React, { useState } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

function Question({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article>
      <div className='header'>
        <h2>{title}</h2>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <AiOutlineMinusCircle className='icon' />
          ) : (
            <AiOutlinePlusCircle className='icon' />
          )}
        </button>
      </div>
      {showInfo && <p>{info}</p>}
    </article>
  );
}
export default Question;
