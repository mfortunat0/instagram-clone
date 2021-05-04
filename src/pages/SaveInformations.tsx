import {
  Button,
  Header,
  Text,
  ImageBackground,
  Container,
} from "../styles/SaveInformations";
import Image from "next/image";

export default function SaveInformations() {
  return (
    <>
      <Header>
        <Image src="/logo.png" width={103} height={29} objectFit="cover" />
      </Header>
      <Container>
        <ImageBackground />
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
