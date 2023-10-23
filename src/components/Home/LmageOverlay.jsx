import React from 'react';
import './ImageOverlay.css';
import rct from '../../assets/images/Rectangle 82.png'
import plum from '../../assets/images/plim12.webp'
const ImageOverlay = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 heroimg">
        <div class="image-container">
        <p class="text"><b>Mechanical/Plumbing</b></p>
         <img src={plum} alt="Your Image"/>
  </div>
        </div>
      </div>
    </div>

  );
};

export default ImageOverlay;
