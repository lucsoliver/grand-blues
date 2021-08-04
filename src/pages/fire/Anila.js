import "./styles.css";
import logo from "../../assets/anila01.png";

function Anila() {
  return (
    <div className="App">
      <header className="App-header">
        <body>
          <div class="head">
            <h1>Os 12 Generais</h1>
          </div>

          <div class="card">
            <img src={logo} alt="Avatar" style={{ width: "auto" }} />
            <div class="container">
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
      </header>
    </div>
  );
}

export default Anila;
