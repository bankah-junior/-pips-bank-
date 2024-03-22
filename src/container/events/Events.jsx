import React from 'react';
import { Navbar, Footer } from '../../components';

const Events = () => {
  return (
      <div>
        <Navbar />
        <div className="w-full h-full" style={{backgroundColor: "#ffffff", padding: "3rem 1rem"}}>
        <iframe frameborder="0" scrolling="yes" title='cc' height="300" width="100%" allowtransparency="true" marginwidth="0" marginheight="0" src="https://ssltools.investing.com/technical_summary.php?pairs=8830,8833,8836,8849,8862,166&curr-name-color=%230059B0&fields=5m,15m,1h,1d&force_lang=1"></iframe><br /><div style={{width:"505px"}}><span style={{float:"left"}}><span style={{fontSize: "11px", color: "#333333", textDecoration: "none"}}>This Technical Analysis is powered by <a href="https://www.investing.com/" rel="nofollow noreferrer" target="_blank" style={{fontSize: "11px", color: "#06529D", fontWeight: "bold"}} class="underline_link">Investing.com</a></span></span></div>
        </div>
        <Footer />
      </div>
  )
}

export default Events