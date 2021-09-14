import React, { useState } from 'react';
import Data from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function Review() {
  //4
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = Data[index];
  const checkNumber = (number) => {
    if (number > Data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return Data.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      console.log(Data.length);
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    setIndex((index) => {
      let randomnumber = Math.floor(Math.random() * Data.length);
      if (randomnumber === index) {
        randomnumber = randomnumber + 1;
      }
      return checkNumber(randomnumber);
    });
  };
  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt='' />
        <span></span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p>{text}</p>
      <div>
        <button onClick={prevPerson} className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button onClick={nextPerson} className='next-btn'>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomPerson} className='random-btn'>
        surprise me
      </button>
    </article>
  );
}

export default Review;
