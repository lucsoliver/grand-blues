import "./styles.css";
import logo from "../../assets/vikala01.png";

function Vikala() {
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
                <b>Vikala</b>
              </h4>
              <p>
                Um dos Doze Generais Divinos e guardião do norte. Seu lado
                "yang" está determinado a trazer esperança, sonhos e maravilhas
                para o mundo. Seu lado "yin" não quer nada mais do que se
                esconder dele. Pego entre dois extremos, o rato divino lança
                suas esperanças nos céus abertos e opta por confiar em seus
                novos amigos.
              </p>
            </div>
          </div>
        </body>
      </header>
    </div>
  );
}

export default Vikala;
