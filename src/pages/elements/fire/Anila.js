import "../styles.css";

import logo from "../../../assets/anila01.png";

function Anila() {
  return (
    <div className="App">
      <body className="Container">
        <div>
          <h1>Ovelha</h1>
        </div>

        <div class="card">
          <img src={logo} alt="Avatar" style={{ width: "auto" }} />
          <div class="card-body">
            <h4>
              <b>Anila</b>
            </h4>
            <p>
              Um dos Doze Generais Divinos, ela protege o sul-sudoeste. Este
              gentil cordeiro de deusa abomina o conflito e ora pela paz
              mundial. Ela suportou o isolamento pelo que pareceu uma
              eternidade, mas agora busca novas terras, guiada pelas estrelas.
            </p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Anila;
