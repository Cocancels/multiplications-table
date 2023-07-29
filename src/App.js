import "./App.css";
import CircleCanvas from "./Components/CircleCanvax";
import { useState } from "react";

function App() {
  const [numberOfPoints, setnumberOfPoints] = useState(10);
  const [multiplicationTable, setmultiplicationTable] = useState(2);

  return (
    <div className="App">
      <h1>Circle Game</h1>
      <div className="game-container">
        <div className="circle">
          <CircleCanvas
            numberOfPoints={numberOfPoints}
            multiplicationTable={multiplicationTable}
          />
        </div>

        <div className="parameters">
          <div className="parameters-explications">
            <h2>Explications</h2>

            <p>
              Rentrez le nombre de points que vous voulez voir apparaitre sur le
              cercle. <br />
              Rentrez ensuite la table de multiplication que vous voulez
              afficher. <br />
              Les points qui apparaissent sur le cercle sont les points qui sont
              des multiples de la table de multiplication que vous avez rentré.
            </p>
          </div>

          <div className="parameters-numberPoints">
            <label htmlFor="numberOfPoints">Number of Points</label>
            <input
              type="number"
              id="numberOfPoints"
              value={numberOfPoints}
              onChange={(e) => setnumberOfPoints(e.target.value)}
            />
          </div>

          <div className="parameters-table">
            <label htmlFor="multiplicationTable">Multiplication Table</label>
            <input
              type="number"
              id="multiplicationTable"
              value={multiplicationTable}
              onChange={(e) => setmultiplicationTable(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
