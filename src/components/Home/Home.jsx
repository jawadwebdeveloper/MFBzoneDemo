import React from "react";
import "./Home.css";
import Hearder from "../Header/Hearder";
import Navebar from "../Navbar/Navebar";
import LmageOverlay from "./LmageOverlay";
import Cardstop from "../Cards/Cardstop";
import bob11 from "../../assets/images/bob11.png";
import bob10 from "../../assets/images/bob10.png";
import bob9 from "../../assets/images/bob9.png";
import bob8 from "../../assets/images/bob8.png";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <Hearder />
      <Navebar />
      <LmageOverlay />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="label4 mt-5">
              <p className="at-procore">
                <span className="text-wrapper4">At </span>
                <span className="span">Procore Estimators</span>
                <span className="text-wrapper4">
                  , our area of expertise lies in delivering precise and
                  dependable mechanical and plumbing estimates. Our seasoned
                  team of estimators grasps the complexities of mechanical and
                  plumbing systems, offering all-encompassing and thorough
                  estimates for your projects. Catering to both residential and
                  commercial constructions, we factor in equipment, materials,
                  labor, and project-specific requirements. Our unwavering
                  commitment to providing vital information enables our clients
                  to make well-informed decisions to ensure the success of their
                  projects. Our mechanical and plumbing estimates form the
                  bedrock of a triumphant construction project.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Cardstop />
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <p className="hometextone">
              <b>Benefits of Mechanical Estimating</b>
            </p>
            <ul className="uldot1">
              <li>Getting access to the industry standards insights.</li>
              <li>Understanding the internal project cost.</li>
              <li>Getting the most reliable mechanical estimates</li>
              <li>Increasing the probability of high profit.</li>
              <li>Boosting their win-bid ratio.</li>
              <li>
                Streamlining their project activities with more confidence.
              </li>
              <li>
                Identifying the errors and flaws in their mechanical project.
              </li>
              <li>
                Mitigating the potential risk while saving their time and money.
              </li>
              {/* <li>A</li> */}
            </ul>

            <p className="hometextone">
              <b>Our Plumbing Estimating Services</b>
            </p>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  <ul className="uldot1">
                    <li>Cold Water Pipes</li>
                    <li>Hot Water Pipes</li>
                    <li>Vent Pipes</li>
                    <li>Gas Pipes</li>
                    <li>Sanitary Pipes</li>
                    <li>Underground Pipes</li>
                    <li>Pipe Fittings</li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="uldot1">
                    <li>Pipe Concealment</li>
                    <li>Insulations</li>
                    <li>Valves</li>
                    <li>Hangers</li>
                    <li>Struts</li>
                    <li>Supports</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <img src={bob11} alt="" className="bob11" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p className="hometextone">
                <b>Are You Ready To Get Started With Us!</b>
            </p>
            <h3 className="hthree"><b>1- Upload you Plans</b></h3>
            <p className="parahome"> <span className="clickhere">Click here</span> to upload your plans. we accept PDF format and your plans can be Bid set, Schematic, Design Development, Construction document, or conceptual drawings.</p>
            
            <h3 className="hthree"><b>2- Get a Quote</b></h3>
            <p className="parahome">Quotes will be based on invoice, delivery date, and turnaround time. </p>

            <h3 className="hthree"><b>3- Receive Estimate</b></h3>
            <p className="parahome">Estimates will be delivered to you in EXCEL sheets comprising all the material and labor pricing with cut reports either in MasterFormat or your customized format. </p>
            
          </div>
        </div>
      </div>


    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
        <p className="hometextone">
                <b>Take a look at our Trades</b>
            </p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3   hoverall  " >
          <div className="onlyone">
            <img src={bob10} alt="" className="fimg" />
            <p className="picbttext childetd">General Requirement</p>
          
          </div>
        </div>
        <div className="col-sm-3  ">
          
        <div className="onlyone">
            <img src={bob9} alt=""  className="fimg"/>
            <p className="picbttext childetd">Site Works</p>
          
          </div>

        </div>
        <div className="col-sm-3   ">
          
        <div className="onlyone">
            <img src={bob8} alt="" className="fimg" />
            <p className="picbttext childetd">Concrete</p>
          
          </div>

        </div>
        <div className="col-sm-3   ">
          
        <div className="onlyone">
            <img src={bob10} alt=""  className="fimg"/>
            <p className="picbttext childetd">Masonry</p>
          
          </div>
        </div>
      </div>



    </div>

    <Footer/>


    </>
  );
}

export default Home;
