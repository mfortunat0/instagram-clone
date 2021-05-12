import {
  ButtonContainer,
  ImageRounded,
  LinkProfile,
  TopContainer,
  IconButton,
  LikeContainer,
  DescribeContainer,
} from "../styles/Post";

import Image from "next/image";

export default function Post() {
  return (
    <>
      <TopContainer>
        <ImageRounded
          src="http://github.com/mfortunat0.png"
          width={32}
          height={32}
        />
        <LinkProfile>mfortunat0</LinkProfile>
        <img src="/threePoints.svg" alt="" />
      </TopContainer>
      <img src="/thumbnail.jpg" width="100%" />
      <ButtonContainer>
        <IconButton>
          <img src="/heart.svg" width={24} height={24} />
        </IconButton>
        <IconButton>
          <Image src="/comment.svg" width={24} height={24} />
        </IconButton>
        <IconButton>
          <Image src="/send.svg" width={24} height={24} />
        </IconButton>
        <IconButton>
          <Image src="/save.svg" width={24} height={24} />
        </IconButton>
      </ButtonContainer>
      <LikeContainer>
        <ImageRounded
          src="http://github.com/mfortunat0.png"
          width={20}
          height={20}
        />
        <p>
          Curtido por <LinkProfile>mfortunat0</LinkProfile> e
          <LinkProfile> 1 outra pessoa</LinkProfile>
        </p>
      </LikeContainer>
      <DescribeContainer>
        <p>
          <LinkProfile>mfortunat0</LinkProfile>Após atualização do iOS, apenas
          4% de usuários deixam tracking habilitado. Mudanças estão em curso, a
          era do tracking desenfreado parece estar com os dias contados.
        </p>
        <p>há 3 horas</p>
      </DescribeContainer>
    </>
  );
}
