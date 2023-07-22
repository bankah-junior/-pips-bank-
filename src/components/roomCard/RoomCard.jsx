import React from 'react';
import { Link } from 'react-router-dom';

const RoomCard = ({cardImage, title, text, linkName, linkTo, cardClass, animeName, animeDelay}) => {
  return (
    <div className="card md:w-100-70 w-full text-center mb-12 p-2" data-aos={animeName} data-aos-duration={animeDelay}>
      <img src={cardImage} alt="Pips Bank" className='w-full' />
      <h3 className='my-4 capitalize font-semibold md:font-bold text-xl'>{title}</h3>
      <p className='text-sm opacity-75 mb-4'>
        {text}
      </p>
      <Link to={linkTo} className="w-full rounded-lg">
        <button className={cardClass}>
          {linkName} &gt;
        </button>
      </Link>
    </div>
  )
}

export default RoomCard