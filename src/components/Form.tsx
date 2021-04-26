import {
  Bar,
  Button,
  ContainerBar,
  Footer,
  InputEmail,
  Link,
  Logo,
  Main,
  Row,
  ContainerStore,
  Text,
  InputPassword,
  Image,
  FacebookIcon,
  LinkFacebook,
} from "../styles/Form";

import Modal from "../components/Modal";
import Toast from "../components/Toast";
import { useState, useRef } from "react";

interface IModalContent {
  title: string;
  text: string;
  buttonText: string[];
}

export default function Form() {
  const inputEmailRef = useRef<HTMLInputElement>();
  const inputPasswordRef = useRef<HTMLInputElement>();
  const [inputsValidate, setInputsValidate] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [toastIsVisible, setToastIsVisible] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [modalContent, setModalContent] = useState<IModalContent>({
    title: "Senha incorreta",
    text: "A senha que você inseriu está incorreta. Tente novamente.",
    buttonText: ["Tente novamente"],
  });

  const validateInputs = () => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const validateEmail = regex.test(inputEmailRef.current.value);
    const validatePassword = inputPasswordRef.current.value.length > 5;

    if (validateEmail && validatePassword) setInputsValidate(true);
    else setInputsValidate(false);
  };

  const loginHandle = () => {
    if (
      inputEmailRef.current.value === "admin@admin.com" &&
      inputPasswordRef.current.value === "123456"
    ) {
      // login
    } else {
      setAttempts(attempts + 1);
      if (attempts > 0) {
        setModalContent({
          title: "Esqueceu a senha?",
          text:
            "Podemos enviar um email para ajudar você a acessar sua conta novamente.",
          buttonText: ["Enviar email", "Tente novamente"],
        });
      }
      setModalIsVisible(true);
    }
  };

  const showToast = () => {
    setToastIsVisible(true);
    setInterval(() => {
      setToastIsVisible(false);
    }, 5000);
  };

  return (
    <>
      <Modal
        setModalIsVisible={setModalIsVisible}
        show={modalIsVisible}
        title={modalContent.title}
        text={modalContent.text}
        buttonText={modalContent.buttonText}
        showToast={showToast}
      />
      <Toast show={toastIsVisible} email={inputEmailRef.current?.value} />
      <Main onSubmit={(event) => event.preventDefault()}>
        <Logo src="/logo.png" />
        <InputEmail
          onChange={validateInputs}
          ref={inputEmailRef}
          placeholder="Telefone, nome de usuario ou email"
        />
        <InputPassword
          onChange={validateInputs}
          ref={inputPasswordRef}
          placeholder="Senha"
        />
        <Button
          disabled={!inputsValidate}
          validate={inputsValidate}
          onClick={loginHandle}
        >
          Entrar
        </Button>
        <ContainerBar>
          <Bar />
          <Text color="#8e8e8e">OU</Text>
          <Bar />
        </ContainerBar>
        <LinkFacebook size="large" mgBottom="3vh" color="#00376b">
          <FacebookIcon />
          Entrar com Facebook
        </LinkFacebook>
        <Link size="small" mgBottom="8vh" color="#00376b">
          Esqueceu a senha?
        </Link>
        <Text mgBottom="8vh">
          Não tem uma conta?
          <Link size="large" color="#0095f6">
            {" "}
            Cadastre-se
          </Link>
        </Text>
        <Text mgBottom="3vh">Obetenha o aplicativo</Text>
        <ContainerStore>
          <Image src="appleStore.png" />
          <Image src="playStore.png" />
        </ContainerStore>
        <Footer>
          <Link size="small">Sobre</Link>
          <Link size="small">Blog</Link>
          <Link size="small">Carreiras</Link>
          <Link size="small">Ajuda</Link>
          <Link size="small">API</Link>
          <Link size="small">Privacidade</Link>
          <Link size="small">Termos</Link>
          <Link size="small">Contas mais relevantes</Link>
          <Link size="small">Hashtags</Link>
          <Link size="small">Localizações</Link>
          <Link size="small">Beleza</Link>
          <Link size="small">Dança e apresentação</Link>
          <Link size="small">Artes visuais</Link>
          <Link size="small">Fitness</Link>
          <Link size="small">Comida e bebida</Link>
          <Link size="small">Casa e jardim</Link>
          <Link size="small">Música</Link>
          <Row>
            <Link size="small">Português (Brasil)</Link>
            <Link size="small">© 2021 Instagram do Facebook</Link>
          </Row>
        </Footer>
      </Main>
    </>
  );
}
