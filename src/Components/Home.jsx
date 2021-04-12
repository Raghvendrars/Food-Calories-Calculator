import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  //Defining variables
  let ricetotal = 0;
  let rotiTotal = 0;
  let parathaTotal = 0;
  let vadapavTotal = 0;
  let dabeliTotal = 0;
  let dosaTotal = 0;

  //Roti count
  const [state, setstate] = useState(0);
  const countHandler = () => {
    setstate(state + 1);
  };

  const countHandlertwo = () => {
    setstate(state - 1);
  };

  //Rice count
  const [riceState, setRiceState] = useState(0);
  const riceCountHandler = () => {
    setRiceState(riceState + 1);
  };

  const riceCountHandlertwo = () => {
    setRiceState(riceState - 1);
  };

  //Paratha Count
  const [paratha, setParatha] = useState(0);
  const parathaCountHandler = () => {
    setParatha(paratha + 1);
  };

  const parathaCountHandlerTwo = () => {
    setParatha(paratha - 1);
  };
  //Vadapav Count
  const [vadapav, setVadapav] = useState(0);
  const vadapavCountHandler = () => {
    setVadapav(vadapav + 1);
  };
  const vadapavCountHandlerTwo = () => {
    setVadapav(vadapav - 1);
  };
  //Dabeli Count
  const [dabeli, setDabeli] = useState(0);
  const dabeliCountHandler = () => {
    setDabeli(dabeli + 1);
  };
  const dabeliCountHandlerTwo = () => {
    setDabeli(dabeli - 1);
  };
  //Dosa Total
  const [dosa, setDosa] = useState(0);
  const dosaCountHandler = () => {
    setDosa(dosa + 1);
  };
  const dosaCountHandlerTwo = () => {
    setDosa(dosa - 1);
  };

  return (
    <div className="container">
      <div class="jumbotron">
        <h3 className="text-center">Your Food Calories Calculator</h3>
      </div>
      <div>
        <div className="row w-75 m-1">
          <div className="col-6"><h4 style={{display:'flex'}}>Bread <h6 className="text-secondary mt-2 ml-2">(Calories per bread = 120)</h6></h4></div>
          <div className="col-1"><button
            className="btn btn-sm btn-primary"
            onClick={countHandler}
          >
            <h6>+</h6>
          </button></div>
          <div className="col-1 ">{state}</div>
          <div className="col-1 ">{state >= 1 ? (
            <button
              className="btn btn-sm btn-danger"
              onClick={countHandlertwo}
            >
              <h6>-</h6>
            </button>

          ) : null}</div>
          <div className="col-3">Total={(rotiTotal = state * 120)}</div>
        </div>

        {/* Rice */}
        <div className="row w-75 m-1">
          <div className="col-6"><h4 style={{display:'flex'}}>Rice<h6 className="text-secondary mt-2 ml-2">(Per 100 gms Calories=130)</h6></h4></div>
          <div className="col-1">
            <button
              className="btn btn-sm btn-primary"
              onClick={riceCountHandler}>+</button>
          </div>
          <div className="col-1">{riceState}</div>
          <div className="col-1">{riceState >= 1 ? (

            <button
              className="btn btn-sm btn-danger"
              onClick={riceCountHandlertwo}
            >
              -
            </button>

          ) : null}</div>
          <div className="col-3">Total={(ricetotal = riceState * 130)}</div>
        </div>
        <div className="row w-75 m-1">
          <div className="col-6"><h4 style={{display:'flex'}}>Paratha<h6 className="text-secondary mt-2 ml-2">(Calories per paratha= 126)</h6></h4></div>
          <div className="col-1"><button
            className="btn btn-sm btn-primary"
            onClick={parathaCountHandler}
          >
            +
                </button></div>
          <div className="col-1">{paratha}</div>
          <div className="col-1">{paratha >= 1 ? (

            <button
              className="btn btn-sm btn-danger"
              onClick={parathaCountHandlerTwo}
            >
              -
            </button>

          ) : null}</div>
          <div className="col-3">Total={(parathaTotal = paratha * 126)}</div>
        </div>
        <div className="row w-75 m-1">
          <div className="col-6"><h4 style={{display:'flex'}}>Vadapav<h6 className="text-secondary mt-2 ml-2">(Calories per Vadapav=197)</h6></h4></div>
          <div className="col-1"> <button
            className="btn btn-sm btn-primary"
            onClick={vadapavCountHandler}
          >
            +
                </button></div>
          <div className="col-1">{vadapav}</div>
          <div className="col-1">{vadapav >= 1 ? (
            <button
              className="btn btn-sm btn-danger"
              onClick={vadapavCountHandlerTwo}
            >
              -
            </button>

          ) : (
            null
          )}</div>
          <div className="col-3">Total={(vadapavTotal = vadapav * 197)}</div>
        </div>
        <div className="row w-75 m-1">
          <div className="col-6"><h4 style={{display:'flex'}}>Dabeli<h6 className="text-secondary mt-2 ml-2">(Calories per dabeli=199)</h6></h4></div>
          <div className="col-1"> <button
            className="btn btn-sm btn-primary"
            onClick={dabeliCountHandler}
          >
            +
                </button></div>
          <div className="col-1">{dabeli}</div>
          <div className="col-1">{dabeli >= 1 ? (

            <button
              className="btn btn-sm btn-danger"
              onClick={dabeliCountHandlerTwo}
            >
              -
            </button>

          ) : (
            null
          )}</div>
          <div className="col-3">Total={(dabeliTotal = dabeli * 199)}</div>
        </div>
        <div className="row w-75 m-1">
          <div className="col-6"><h4 style={{display:'flex'}}>Dosa<h6 className="text-secondary mt-2 ml-2">(Calories per Dosa=133)</h6></h4></div>
          <div className="col-1"><button
            className="btn btn-sm btn-primary"
            onClick={dosaCountHandler}
          >
            +
                </button></div>
          <div className="col-1">{dosa}</div>
          <div className="col-1">{dosa >= 1 ? (
            <button
              className="btn btn-sm btn-danger"
              onClick={dosaCountHandlerTwo}
            >
              -
            </button>
          ) : (
            null
          )}</div>
          <div className="col-3">Total={(dosaTotal = dosa * 133)}</div>
        </div>
        {/* total calroies */}
        <div style={{width:'300px',height:'70px',border:'1px solid black',display:'flex',padding:'20px'}} className="box mt-4"><h5>Total Calories:</h5>
          <h4 className="text-primary ml-2"> {rotiTotal +
            ricetotal +
            parathaTotal +
            vadapavTotal +
            dabeliTotal +
            dosaTotal}</h4>
        </div>
      </div>
            <p>Developed By Raghav</p>
    </div>
  );
};

export default Home;
