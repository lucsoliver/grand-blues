import "../styles.css";

import logo from "../../../assets/kumbhira01.png";

function Kumbhira() {
  return (
    <div className="App">
      <body className="Container">
        <div class="head">
          <h1>Javali</h1>
        </div>
        <div class="card">
          <img src={logo} alt="Avatar" style={{ width: "auto" }} />
          <div class="card-body">
            <h4>
              <b>Kumbhira</b>
            </h4>
            <p>
              Um dos Doze Generais Divinos, ela guarda o norte-noroeste. Ao
              contrário dos javalis divinos antes dela, ela não possui o poder
              abençoado de sua laia, mas ainda assim se aventura nos céus para
              se provar digna. Mal sabe ela que sua sinceridade e ambição fazem
              mais por aqueles ao seu redor do que qualquer quantidade de força
              jamais poderia.
            </p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Kumbhira;
