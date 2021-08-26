import {
  Center,
  Container,
  Card,
  Image,
  CardBody,
  Texto,
  Text,
} from "../styles";

import logo from "../../../assets/andira01.png";

function Andira() {
  return (
    <Center>
      <Container>
        <div>
          <h1>Macaco</h1>
        </div>

        <Card>
          <Image src={logo} alt="Avatar" style={{ width: "auto" }} />
          <CardBody>
            <Texto>Andira</Texto>
            <Text>
              Guardião do Oeste-Sudoeste como um dos Doze Generais Celestiais.
              Freqüentemente, tendo sonhos da utopia que seus ancestrais se
              propuseram, ela própria parte em uma jornada após um certo
              encontro fatídico. A determinação inabalável dessa deusa macaco a
              torna um recurso inestimável para a tripulação.
            </Text>
          </CardBody>
        </Card>
      </Container>
    </Center>
  );
}

export default Andira;
