import {
  Center,
  Container,
  Card,
  Image,
  CardBody,
  Text,
  Texto,
} from "../styles";

import logo from "../../../assets/kumbhira01.png";

function Kumbhira() {
  return (
    <Center>
      <Container>
        <div>
          <h1>Javali</h1>
        </div>
        <Card>
          <Image src={logo} alt="Avatar" style={{ width: "auto" }} />
          <CardBody>
            <Texto>Kumbhira</Texto>
            <Text>
              Um dos Doze Generais Divinos, ela guarda o norte-noroeste. Ao
              contrário dos javalis divinos antes dela, ela não possui o poder
              abençoado de sua laia, mas ainda assim se aventura nos céus para
              se provar digna. Mal sabe ela que sua sinceridade e ambição fazem
              mais por aqueles ao seu redor do que qualquer quantidade de força
              jamais poderia.
            </Text>
          </CardBody>
        </Card>
      </Container>
    </Center>
  );
}

export default Kumbhira;
