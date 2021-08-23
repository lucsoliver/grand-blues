import "../styles.css";
import logo from "../../../assets/mahira01.png";

function Mahira() {
  return (
    <div className="App">
      <body className="Container">
        <div class="head">
          <h1>Galo</h1>
        </div>

        <div class="card">
          <img src={logo} alt="Avatar" style={{ width: "auto" }} />
          <div class="card-body">
            <h4>
              <b>Mahira</b>
            </h4>
            <p>
              Um dos Doze Generais Divinos, Mahira é a Rainha dos Galos. Embora
              ela não tenha as asas adequadas a esse título, sua pequena
              estrutura abriga grande poder e gênio criativo. Algum dia ela
              conduzirá o povo do céu por todo o caminho até os céus.
            </p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Mahira;
