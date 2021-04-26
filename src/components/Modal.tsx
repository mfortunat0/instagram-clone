import { Button, Text, Main, ModalContent, Title } from "../styles/Modal";
import { nanoid } from "nanoid";

export default function Modal({
  show,
  title,
  text,
  buttonText,
  setModalIsVisible,
  showToast,
}) {
  const modalHandleClick = (e) => {
    if (e.target.id === "out") setModalIsVisible(false);
  };

  const sendEmailHandle = () => {
    setModalIsVisible(false);
    showToast();
  };

  return (
    <Main id="out" show={show} onClick={(e) => modalHandleClick(e)}>
      <ModalContent>
        <Title>{title}</Title>
        <Text>{text}</Text>
        {buttonText.map((item: string) => {
          if (item === "Tente novamente") {
            return (
              <Button key={nanoid()} onClick={() => setModalIsVisible(false)}>
                {item}
              </Button>
            );
          } else {
            return (
              <Button key={nanoid()} onClick={sendEmailHandle}>
                {item}
              </Button>
            );
          }
        })}
      </ModalContent>
    </Main>
  );
}
