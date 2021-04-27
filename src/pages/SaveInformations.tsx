import {
  Button,
  Header,
  Image,
  Logo,
  Text,
  Container,
} from "../styles/SaveInformations";

export default function SaveInformations() {
  return (
    <>
      <Header>
        <Logo src="logo.png" />
      </Header>
      <Container>
        <Image />
        <Text>Salvar suas informações de login?</Text>
        <Text>
          Podemos salvar suas informações de login neste navegador para que você
          não precise inseri-las de novo.
        </Text>
        <Button>Salvar informações</Button>
        <Button>Agora não</Button>
      </Container>
    </>
  );
}
