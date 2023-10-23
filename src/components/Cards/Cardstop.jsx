import React, { useReducer } from "react";
import "./Cardstop.css";
import bob10 from '../../assets/images/bob10.png';
import bob8 from '../../assets/images/bob8.png';
import bob9 from '../../assets/images/bob9.png';

const Cardstop = ({ property1, rectangle = "rectangle-219.png", divClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });
  const [state2, dispatch2] = useReducer(reducer, {
    property1: property1 || "default",
  });
  const [state3, dispatch3] = useReducer(reducer, {
    property1: property1 || "default",
  });
  const [state4, dispatch4] = useReducer(reducer, {
    property1: property1 || "default",
  });
  const [state5, dispatch5] = useReducer(reducer, {
    property1: property1 || "default",
  });
  const [state6, dispatch6] = useReducer(reducer, {
    property1: property1 || "default",
  });

  const handleMouseEnter = () => {
    dispatch("mouse_enter");
  };

  const handleMouseLeave = () => {
    dispatch("mouse_leave");
  };
  const handleMouseEnter2 = () => {
    dispatch2("mouse_enter");
  };

  const handleMouseLeave2 = () => {
    dispatch2("mouse_leave");
  };
  const handleMouseEnter3 = () => {
    dispatch3("mouse_enter");
  };

  const handleMouseLeave3 = () => {
    dispatch3("mouse_leave");
  };
  const handleMouseEnter4 = () => {
    dispatch4("mouse_enter");
  };

  const handleMouseLeave4 = () => {
    dispatch4("mouse_leave");
  };
  const handleMouseEnter5 = () => {
    dispatch5("mouse_enter");
  };

  const handleMouseLeave5 = () => {
    dispatch5("mouse_leave");
  };
  const handleMouseEnter6 = () => {
    dispatch6("mouse_enter");
  };

  const handleMouseLeave6 = () => {
    dispatch6("mouse_leave");
  };

  return (
    <>
    <div className="container mb-5">
      <div className="row">
        <div className="col-sm-12">
          <p className="Mechanical"><b>Mechanical Estimation Data</b></p>
        </div>
      </div>

        <div className="row ">
          <div className="col-sm-2 "></div>
            <div className="col-sm-3 ">
            <div className="group" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
              <img className={`rectangle ${state.property1}`} alt="Rectangle" src={state.property1 === "default" ? bob10 : "image.png"} />
              {state.property1 === "default" && (
                <div className={`text-wrapper ${divClassName}`}>Mechanical Equipment Installation</div>
              )}
              {state.property1 === "variant-2" && (
                <>
                  <div className="div">Mechanical Equipment Installation</div>
                  <p className="p">
                    Approximations of labor costs for setting up, connecting, and calibrating equipment (boilers, chillers,
                    pumps, etc.). Expenses for installation, pipes, and electrical connections.
                  </p>
                </>
              )}
            </div>
          </div>
      <div className="col-sm-3 ">
            <div className="group" onMouseLeave={handleMouseLeave2} onMouseEnter={handleMouseEnter2}>
      <img className={`rectangle ${state2.property1}`} alt="Rectangle" src={state2.property1 === "default" ? bob8 : "image.png"} />
      {state2.property1 === "default" && (
        <div className={`text-wrapper ${divClassName}`}>Mechanical Equipment Installation</div>
      )}
      {state2.property1 === "variant-2" && (
        <>
          <div className="div">Mechanical Equipment Installation</div>
          <p className="p">
            Approximations of labor costs for setting up, connecting, and calibrating equipment (boilers, chillers,
            pumps, etc.). Expenses for installation, pipes, and electrical connections.
          </p>
        </>
      )}
    </div>
            </div>
            <div className="col-sm-3 ">
            <div className="group" onMouseLeave={handleMouseLeave3} onMouseEnter={handleMouseEnter3}>
      <img className={`rectangle ${state3.property1}`} alt="Rectangle" src={state3.property1 === "default" ? bob9 : "image.png"} />
      {state3.property1 === "default" && (
        <div className={`text-wrapper ${divClassName}`}>Mechanical Equipment Installation</div>
      )}
      {state3.property1 === "variant-2" && (
        <>
          <div className="div">Mechanical Equipment Installation</div>
          <p className="p">
            Approximations of labor costs for setting up, connecting, and calibrating equipment (boilers, chillers,
            pumps, etc.). Expenses for installation, pipes, and electrical connections.
          </p>
        </>
      )}
    </div>
            </div>
        </div>
    </div>




    <div className="container mb-5">
      <div className="row">
        <div className="col-sm-12">
          <p className="Mechanical"><b>Plumbing Estimation Data</b></p>
        </div>
      </div>

        <div className="row ">
          <div className="col-sm-2 "></div>
            <div className="col-sm-3 ">
            <div className="group" onMouseLeave={handleMouseLeave4} onMouseEnter={handleMouseEnter4}>
      <img className={`rectangle ${state4.property1}`} alt="Rectangle" src={state4.property1 === "default" ? bob10 : "image.png"} />
      {state4.property1 === "default" && (
        <div className={`text-wrapper ${divClassName}`}>Mechanical Equipment Installation</div>
      )}
      {state4.property1 === "variant-2" && (
        <>
          <div className="div">Mechanical Equipment Installation</div>
          <p className="p">
            Approximations of labor costs for setting up, connecting, and calibrating equipment (boilers, chillers,
            pumps, etc.). Expenses for installation, pipes, and electrical connections.
          </p>
        </>
      )}
    </div>
            </div>
            <div className="col-sm-3 ">
            <div className="group" onMouseLeave={handleMouseLeave5} onMouseEnter={handleMouseEnter5}>
      <img className={`rectangle ${state5.property1}`} alt="Rectangle" src={state5.property1 === "default" ? bob8 : "image.png"} />
      {state5.property1 === "default" && (
        <div className={`text-wrapper ${divClassName}`}>Mechanical Equipment Installation</div>
      )}
      {state5.property1 === "variant-2" && (
        <>
          <div className="div">Mechanical Equipment Installation</div>
          <p className="p">
            Approximations of labor costs for setting up, connecting, and calibrating equipment (boilers, chillers,
            pumps, etc.). Expenses for installation, pipes, and electrical connections.
          </p>
        </>
      )}
    </div>
            </div>
            <div className="col-sm-3 ">
            <div className="group" onMouseLeave={handleMouseLeave6} onMouseEnter={handleMouseEnter6}>
      <img className={`rectangle ${state6.property1}`} alt="Rectangle" src={state6.property1 === "default" ? bob9 : "image.png"} />
      {state6.property1 === "default" && (
        <div className={`text-wrapper ${divClassName}`}>Mechanical Equipment Installation</div>
      )}
      {state6.property1 === "variant-2" && (
        <>
          <div className="div">Mechanical Equipment Installation</div>
          <p className="p">
            Approximations of labor costs for setting up, connecting, and calibrating equipment (boilers, chillers,
            pumps, etc.). Expenses for installation, pipes, and electrical connections.
          </p>
        </>
      )}
    </div>
            </div>
        </div>
    </div>
    </>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };
    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
    default:
      return state;
  }
}

export default Cardstop;
