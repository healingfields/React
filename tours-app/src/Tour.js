import React, { useState } from 'react';

function Tour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className='single-tour'>
      <img src={image} alt='' />
      <footer>
        <div className='tour-info'>
          <h1>{name}</h1>
          <h3 className='price'>{price}</h3>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className='readMore' onClick={() => setReadMore(!readMore)}>
            {readMore ? '  show less' : 'read more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
}
export default Tour;
