import React from 'react'
import './Header.css'
function Hearder() {
  return (
    <div className='bgheader'>

        <div className="container">
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-4">
                    <div className="label">
                        <div className="text-wrapper">TURNAROUND TIME 24-48 HOURS!</div>
                    </div>
                </div>
                <div className="col-sm-4 text-end phone phonevv">
                    <i class="fa-brands fa-whatsapp "></i>  +1 917 300 1079
                </div>
                
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-4 or">
                    <p className="off text-center">Affordable Estimate (30% off)</p>
                </div>
                <div className="col-sm-5 text-end phone em ">
                    <i class="fa-solid fa-envelope"></i> Dave@procoreestimators.com
                </div>
                {/* <div className="col-sm-1">
                    <i class="fa-brands fa-facebook"></i>
                </div> */}
            </div>
        </div>
               
               
    </div>





  )
}

export default Hearder