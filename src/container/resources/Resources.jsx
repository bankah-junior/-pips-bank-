import React from 'react';
import { Navbar, Footer, ResourcesCard } from '../../components';
import resourceImg1 from '../../assets/resources/bfx-calculator.png';
import resourceImg2 from '../../assets/resources/book1.png';

const Resources = () => {
  return (
      <div>
        <Navbar />
        {/* <Loading /> */}
        <main className='mx-8 my-4'>
          <h3 className="text-3xl md:text-4xl font-bold capitalize text-center underline mb-4">resources</h3>
          <ResourcesCard
           resourceImg={resourceImg1} 
           resourceTitle={"BFX-CALCULATOR"}
           resourceText={"This is a free forex calculator developed by Anthony Bankah which makes all your forex calculations with ease. Click on the button below to visit the site for access."}
           resourceLink={"https://bfx-calculator.netlify.app"}
           resourceType={"Free Tool"}
          />
          <ResourcesCard
           resourceImg={resourceImg2} 
           resourceTitle={"BEGINNERS GUIDE TO FOREX TRADING"}
           resourceText={"This document has been prepared for those who want to take a step into the forex trading world and its contents are practical based and real world related. Click the button below to download the document. "}
           resourceLink={"#home"}
           resourceType={"Free Tool"}
          />
        </main>
        <Footer />
      </div>
  )
}

export default Resources