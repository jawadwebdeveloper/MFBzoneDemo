import React from 'react'
import './Footer.css'
import footerlogo from '../../assets/images/procore-logo-file-copy 1.png'
function Footer() {
  return (
    <>
        
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="background-image">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4 ">
                                    <h5 className='plansupload'><b>UPLOAD YOUR PLANS</b></h5>
                                    <i class="fa-brands fa-google-drive icc" style={{color:"#FFFF",fontSize:"2rem",marginLeft:"20%"}}></i>
                                    <i class="fa-brands fa-google-drive icc" style={{color:"#FFFF",fontSize:"2rem",marginLeft:"5%"}}></i>
                                </div>
                                <div className="col-sm-8">
                                    <p className='pp1'>For a quick quote based on your project scope, call us at +1 917 300 1079 or email us at Dave@procoreestimators.com </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-fluid footerback">
            

        <div className="row">
                <div className="col-sm-12 mb-5">

                    <div className="container">
                    <div className="row">
                        <div className="col-sm-4 mt-5">
                            <img src={footerlogo} alt="" />
                            <p className='footerpara'>
                                    <span style={{color:"#ff7518"}}> <b>PROCORE</b> </span> Estimators are an industry leader in providing accurate and reliable construction cost estimation services. We specialize in Quantity and Material Takeoff, Scheduling, and Planning for your project management needs. Our experts use advanced softwares and we pay close attention to detail to ensure accurate estimates. We provide you with accurate information in a timely manner, enabling you to make informed decisions and execute projects efficiently. Rely on PROCORE Estimators for precise and prompt cost estimation in construction.
                            </p>
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-3 text-end" style={{marginTop:"7%"}}>
                            <h2 className='footerh2'><b>Navigation</b></h2>
                            <h2 className='footerh2'><b>Service</b></h2>
                            <h2 className='footerh2'><b>About us</b></h2>
                            <h2 className='footerh2'><b>Payment</b></h2>
                            <h2 className='footerh2'><b>Sample</b></h2>
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-3 " style={{marginTop:"7%"}}>
                            <h2 className='footercontact'><b>Contact</b></h2>
                            <div className="container">
                                <div className="row jacksco ">
                                    <div className="col-sm-3 ">
                                        
                                     <i class="fa-solid fa-location-crosshairs" style={{color:"white"}}></i>
                                    </div>
                                    <div className="col-sm-9 ">
                                            <p style={{color:"white"}}>2505 Bedford Ave, Brooklyn, NY 11226, USA</p>
                                    </div>
                                </div>
                                <div className="row  jacksco">
                                    <div className="col-sm-3 ">
                                        
                                     <i class="fa-solid fa-phone" style={{color:"white"}}></i>
                                    </div>
                                    <div className="col-sm-9 ">
                                            <p style={{color:"white"}}>+1 917 300 1079</p>
                                    </div>
                                </div>
                                <div className="row jacksco">
                                    <div className="col-sm-3 ">
                                        
                                     <i class="fa-solid fa-envelope" style={{color:"white"}}></i>
                                    </div>
                                    <div className="col-sm-9 ">
                                            <p style={{color:"white"}}>Dave@procoreestimators.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                
                       
                </div>
                
            </div>
            <p  className='Copyright text-center'>Copyright © 2023 Procore Estimators Designed By <span style={{color:"green"}}>MF</span> <span style={{color:"#ff7518"}}>Bzone</span> </p> 
        </div>


    </>
  )
}

export default Footer