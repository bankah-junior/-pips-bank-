import React from 'react';
import './coursesCard.css';

const CoursesCard = ({ courseThumbnail, courseLevel, coursetitle, courseDescription }) => {
  return (
    <div>
        <div className="w-full flex flex-col md:flex-row md:items-center my-4 card">
            <div className="w-full p-2 flex items-center md:justify-start justify-center relative overflow-hidden cursor-pointer">
                <img src={courseThumbnail} alt="ts" className='md:w-full coursethumbnail' />
                <div className="absolute p-1 rounded-lg text-white imgTag m-4">FREE</div>
            </div>
            <div className="p-2 md:p-0 relative">
                <span className="px-2 py-1 text-white" style={{ backgroundColor: "#3F3D56" }}>{courseLevel}</span>
                <h3 className="text-2xl md:text-lg font-semibold mt-4 courseTitle cursor-pointer">{coursetitle}</h3>
                <p className="opacity-75 mt-2">{courseDescription}</p>
            </div>
        </div>
    </div>
  )
}

export default CoursesCard