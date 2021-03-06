import "../styles.tsx";

import logo from "../../../assets/catura01.png";

function Catura() {
  return (
    <div className="App">
      <body className="Container">
        <div class="head">
          <h1>Boi</h1>
        </div>

        <div class="card">
          <img src={logo} alt="Avatar" style={{ width: "auto" }} />
          <div class="card-body">
            <h4>
              <b>Catura</b>
            </h4>
            <p>
              Um dos Doze Generais Divinos e guardião do norte-nordeste, este
              Boi Divino adora olhar para o céu enquanto sonha com o romance. As
              vacas levantam suas vozes em uníssono enquanto sua cuidadora
              embarca em sua viagem destinada pelos céus sem fim.
            </p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Catura;
