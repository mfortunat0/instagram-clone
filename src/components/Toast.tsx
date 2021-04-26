import { Container, Text } from "../styles/Toast";

export default function Toast({ email, show }) {
  return (
    <Container show={show}>
      <Text>{`Enviamos um email para ${email} com um link para você poder entrar novamente na sua conta.`}</Text>
    </Container>
  );
}
