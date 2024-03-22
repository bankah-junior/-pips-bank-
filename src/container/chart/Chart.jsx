import React from 'react';
import { Navbar, Footer } from '../../components';

const Chart = () => {
  return (
      <div>
        <Navbar />
        <div className="w-full h-full" style={{backgroundColor: "#141721"}}>
          <iframe src="https://www.rebatekingfx.com/widgets/live-chart/EUR.USD" frameborder="0" title='Chart' width="100%" height="680"></iframe>
        </div>
        <Footer />
      </div>
  )
}

export default Chart