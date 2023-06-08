import React from 'react';
import './loader.scss';

export const Loader: React.FC = () => (
  <div className="loader">
    <div className="loader-bg">
      <h6 className="loader-text">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <img src="/wenex-logo.ico" className="loader-img" alt="" />
      </h6>
    </div>
    <div className="drops">
      <div className="drop1" />
      <div className="drop2" />
    </div>
  </div>
);
export default Loader;
