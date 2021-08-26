import {
  Center,
  Container,
  Card,
  Image,
  CardBody,
  Texto,
  Text,
} from "../styles";

import logo from "../../../assets/vajra01.png";

function Vajra() {
  return (
    <Center>
      <Container>
        <div>
          <h1>Cachorro</h1>
        </div>

        <Card>
          <Image src={logo} alt="Avatar" style={{ width: "auto" }} />
          <CardBody>
            <Texto>Vajra</Texto>
            <Text>
              Guardião do Oeste-Noroeste e um dos Doze Generais Divinos.
              Reverenciada como uma divindade da guerra junto com seu parceiro
              canino Garjana, ela é firme e determinada em sua busca por força.
              Sua pureza de coração permite que ela ouça as vozes do mundo
              natural, tornando-a um bem inestimável para a tripulação.
            </Text>
          </CardBody>
        </Card>
      </Container>
    </Center>
  );
}

export default Vajra;
