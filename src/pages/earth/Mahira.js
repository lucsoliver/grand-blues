import "./styles.css";
import logo from "../../assets/mahira01.png";

// import fire from "../assets/Element_Fire.png";
// import water from "../assets/Element_Water.png";
// import earth from "../assets/Element_Earth.png";
// import wind from "../assets/Element_Wind.png";
// import light from "../assets/Element_Light.png";
// import dark from "../assets/Element_Dark.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <body>
          <div class="head">
            <h1>Os 12 Generais</h1>
          </div>
          {/* <div class="tab">
            <ul class="tabnav">
              <li class="tabactive fire">
                <img
                  src={fire}
                  alt="Fire"
                  style={{ width: "auto", height: "auto" }}
                />
              </li>

              <li class="tabactive water">
                <img
                  src={water}
                  alt="Water"
                  style={{ width: "auto", height: "auto" }}
                />
              </li>

              <li class="tabactive earth">
                <img
                  src={earth}
                  alt="Earth"
                  style={{ width: "auto", height: "auto" }}
                />
              </li>

              <li class="tabactive wind">
                <img
                  src={wind}
                  alt="Wind"
                  style={{ width: "auto", height: "auto" }}
                />
              </li>

              <li class="tabactive light">
                <img
                  src={light}
                  alt="Light"
                  style={{ width: "auto", height: "auto" }}
                />
              </li>

              <li class="tabactive dark">
                <img
                  src={dark}
                  alt="Dark"
                  style={{ width: "auto", height: "auto" }}
                />
              </li>
            </ul>
          </div> */}
          <div class="card">
            <img src={logo} alt="Avatar" style={{ width: "auto" }} />
            <div class="container">
              <h4>
                <b>Mahira</b>
              </h4>
              <p>
                Um dos Doze Generais Divinos, Mahira é a Rainha dos Galos.
                Embora ela não tenha as asas adequadas a esse título, sua
                pequena estrutura abriga grande poder e gênio criativo. Algum
                dia ela conduzirá o povo do céu por todo o caminho até os céus.
              </p>
            </div>
          </div>
        </body>
      </header>
    </div>
  );
}

export default App;
