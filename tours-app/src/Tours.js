import React from 'react';
import Tour from './Tour';

function Tours({ tours, removeTour }) {
  return (
    <section>
      <div>
        <h1 className='title'>OURS TOURS</h1>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
}
export default Tours;
