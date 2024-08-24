import React from 'react';
import { Navbar, Footer, ResourcesCard } from '../../components';
import resourceImg1 from '../../assets/resources/bfx-calculator.png';
import resourceImg2 from '../../assets/resources/book1.png';
import resourceImg3 from '../../assets/resources/candlestick-bible.png';
import resourceImg4 from '../../assets/resources/BabyPips.png';
import resourceImg5 from '../../assets/resources/JAPANESE_CANDLESTICK.png';
import resourceImg6 from '../../assets/resources/TradingPsychology.png';

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
           resourceLink={"https://drive.google.com/uc?export=download&id=1wrnZAW6L2UdFoM_IhlvTnPYvz6j8lCiX"}
           resourceType={"Free Tool"}
          />
          <ResourcesCard
           resourceImg={resourceImg3} 
           resourceTitle={"THE CANDLESTICK BIBLE"}
           resourceText={"The Candlestick trading bible is one of the most powerful trading systems in history. It was invented by Homma Munehisa.The father of candlestick chart patterns."}
           resourceLink={"https://drive.google.com/uc?export=download&id=1-IyqoczJo172m1ZGNKr2FkBLSSlouk47"}
           resourceType={"Free Tool"}
          />
          <ResourcesCard
           resourceImg={resourceImg4} 
           resourceTitle={"SIMPLIFIED BABYPIPS"}
           resourceText={"School of Pipsology. This is a simplified PDF of the entire website. Visit 'babypips.com' for more detailed explanation. "}
           resourceLink={"https://drive.google.com/uc?export=download&id=1p1tT2O6bXbQupdrhMDIXFqAWWZZNIm_4"}
           resourceType={"Free Tool"}
          />
          <ResourcesCard
           resourceImg={resourceImg5} 
           resourceTitle={"JAPANESE CANDLESTICK CHARTING TECHNIQUES"}
           resourceText={"Unloack the power of candlestick techiques by know every detail behind the formation of each. This book was written by STEVE NISON. "}
           resourceLink={"https://drive.google.com/uc?export=download&id=12K6VBb8TEp7VE2H_ex--HnxekVRWQUVV"}
           resourceType={"Free Tool"}
          />
          <ResourcesCard
           resourceImg={resourceImg6} 
           resourceTitle={"TRADING PSYCHOLOGY"}
           resourceText={"Thoughts and emotions are part and parcel of our human experience. We can never part ways with them, but we can definitely find a way to work with them. So my suggestion is that we have to learn to use our brain in a way that engenders less resistance and better psychological satisfaction..."}
           resourceLink={"https://drive.google.com/uc?export=download&id=10zZqLpEMP_RVAEBEkMrRURCwbQDqMw6k"}
           resourceType={"Free Tool"}
          />
        </main>
        <Footer />
      </div>
  )
}

export default Resources