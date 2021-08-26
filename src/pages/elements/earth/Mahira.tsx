import {
  Center,
  Container,
  Card,
  CardBody,
  Image,
  Text,
  Texto,
} from "../styles";

import logo from "../../../assets/mahira01.png";

function Mahira() {
  return (
    <Center>
      <Container>
        <div>
          <h1>Galo</h1>
        </div>

        <Card>
          <Image src={logo} alt="Avatar" style={{ width: "auto" }} />
          <CardBody>
            <Texto>Mahira</Texto>
            <Text>
              Um dos Doze Generais Divinos, Mahira é a Rainha dos Galos. Embora
              ela não tenha as asas adequadas a esse título, sua pequena
              estrutura abriga grande poder e gênio criativo. Algum dia ela
              conduzirá o povo do céu por todo o caminho até os céus.
            </Text>
          </CardBody>
        </Card>
      </Container>
    </Center>
  );
}

export default Mahira;
