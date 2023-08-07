import React from 'react';

const ResourcesCard = ({resourceImg, resourceTitle, resourceText, resourceLink, resourceType}) => {
  return (
    <>
        <div className="flex flex-col card md:flex-row w-full items-center mb-8">
            <div className="w-full md:w-100-70 p-2 flex items-center">
                <img src={resourceImg} alt="Forex Calculator" className='rounded-lg' />
            </div>
            <div className="w-full md:w-100-30 p-4 flex flex-col-reverse md:flex-row md:items-start md:justify-between">
                <div className="w-full md:w-100-20">
                    <h3 className="text-2xl md:text-4xl font-bold uppercase">{resourceTitle}</h3>
                    <p className=" font-semibold opacity-75 mb-4">{resourceText}</p>
                    <a href={resourceLink}>
                        <button className='w-full border-2 p-2 rounded-lg bg-green-600 text-white font-semibold p-2'>Click Me</button>
                    </a>
                </div>
                <div className="w-100-70 md:w-100-90 bg-teal-600 text-center text-white rounded p-1 mb-4">{resourceType}</div>
            </div>
        </div>
    </>
  )
}

export default ResourcesCard