import "../styles.css";

import logo from "../../../assets/andira01.png";

function Andira() {
  return (
    <div className="App">
      <body className="Container">
        <div class="head">
          <h1>Macaco</h1>
        </div>

        <div class="card">
          <img src={logo} alt="Avatar" style={{ width: "auto" }} />
          <div class="card-body">
            <h4>
              <b>Andira</b>
            </h4>
            <p>
              Guardião do Oeste-Sudoeste como um dos Doze Generais Celestiais.
              Freqüentemente, tendo sonhos da utopia que seus ancestrais se
              propuseram, ela própria parte em uma jornada após um certo
              encontro fatídico. A determinação inabalável dessa deusa macaco a
              torna um recurso inestimável para a tripulação.
            </p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Andira;
