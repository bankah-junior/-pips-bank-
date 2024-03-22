import React from 'react';
import { Navbar, Footer } from '../../components';

const Blogs = () => {
  return (
      <div>
        <Navbar />
        <div className="w-full h-full" style={{backgroundColor: "#ffffff", padding: "1rem 3rem"}}>
          <iframe src="https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&importance=3&features=datepicker,timezone,timeselector,filters&countries=25,32,6,37,72,22,17,39,14,10,35,43,56,36,110,11,26,12,4,5&calType=day&timeZone=8&lang=1" title='Economic Calendar' width="100%" height="467" frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0"></iframe><div class="poweredBy" style={{fontFamily: "Arial, Helvetica"}}><span style={{fontSize: "11px", color: "#333333", textDecoration: "none"}}>Real Time Economic Calendar provided by <a href="https://www.investing.com/" rel="nofollow noreferrer" target="_blank" style={{fontSize: "11px", color: "#06529D", fontWeight: "bold"}} class="underline_link">Investing.com</a>.</span></div>
        </div>
        <Footer />
      </div>
  )
}

export default Blogs