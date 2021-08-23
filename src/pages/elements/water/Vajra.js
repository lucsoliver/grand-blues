import "../styles.css";

import logo from "../../../assets/vajra01.png";

function Vajra() {
  return (
    <div className="App">
      <body className="Container">
        <div class="head">
          <h1>Cachorro</h1>
        </div>

        <div class="card">
          <img src={logo} alt="Avatar" style={{ width: "auto" }} />
          <div class="card-body">
            <h4>
              <b>Vajra</b>
            </h4>
            <p>
              Guardião do Oeste-Noroeste e um dos Doze Generais Divinos.
              Reverenciada como uma divindade da guerra junto com seu parceiro
              canino Garjana, ela é firme e determinada em sua busca por força.
              Sua pureza de coração permite que ela ouça as vozes do mundo
              natural, tornando-a um bem inestimável para a tripulação.
            </p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Vajra;
