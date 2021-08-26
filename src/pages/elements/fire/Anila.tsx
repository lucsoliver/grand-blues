import {
  Center,
  Container,
  Card,
  CardBody,
  Image,
  Text,
  Texto,
} from "../styles";

import logo from "../../../assets/anila01.png";

function Anila() {
  return (
    <Center>
      <Container>
        <div>
          <h1>Ovelha</h1>
        </div>

        <Card className="teste">
          <Image src={logo} alt="Avatar" style={{ width: "auto" }} />
          <CardBody>
            <Texto>Anila</Texto>
            <Text>
              Um dos Doze Generais Divinos, ela protege o sul-sudoeste. Este
              gentil cordeiro de deusa abomina o conflito e ora pela paz
              mundial. Ela suportou o isolamento pelo que pareceu uma
              eternidade, mas agora busca novas terras, guiada pelas estrelas.
            </Text>
          </CardBody>
        </Card>
      </Container>
    </Center>
  );
}

export default Anila;
