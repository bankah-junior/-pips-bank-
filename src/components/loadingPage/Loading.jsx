import React from "react";
import "./loadingStyle.css";

const Loading = () => {
  return (
    <div>
      <section className="loader-section">
        <div className="loader">
          <div className="upper ball"></div>
          <div className="right ball"></div>
          <div className="lower ball"></div>
          <div className="left ball"></div>
        </div>
        <div className="loader-text">Coming Soon</div>
      </section>
    </div>
  );
};

export default Loading;
