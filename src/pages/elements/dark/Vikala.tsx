import {
  Center,
  Container,
  Card,
  Image,
  CardBody,
  Texto,
  Text,
} from "../styles";

import logo from "../../../assets/vikala01.png";

function Vikala() {
  return (
    <Center>
      <Container>
        <div>
          <h1>Rato</h1>
        </div>

        <Card>
          <Image src={logo} alt="Avatar" style={{ width: "auto" }} />
          <CardBody>
            <Texto>Vikala </Texto>
            <Text>
              Um dos Doze Generais Divinos e guardião do norte. Seu lado "yang"
              está determinado a trazer esperança, sonhos e maravilhas para o
              mundo. Seu lado "yin" não quer nada mais do que se esconder dele.
              Pego entre dois extremos, o rato divino lança suas esperanças nos
              céus abertos e opta por confiar em seus novos amigos.
            </Text>
          </CardBody>
        </Card>
      </Container>
    </Center>
  );
}

export default Vikala;
