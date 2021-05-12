import {
  Navbar,
  Status,
  StatusBorder,
  ImageRounded,
  StatusItem,
  StatusName,
  StatusProfile,
  PlusButton,
  Bar,
  Main,
} from "../styles/Feed";
import Image from "next/image";
import Post from "../components/Post";

export default function Feed() {
  return (
    <Main>
      <Navbar>
        <Image src="/camera.svg" width={24} height={24} />
        <Image src="/logo.png" width={103} height={29} objectFit="cover" />
        <Image src="/send.svg" width={24} height={24} />
      </Navbar>
      <Status>
        <StatusProfile>
          <ImageRounded
            src="http://github.com/mfortunat0.png"
            width={56}
            height={56}
          />
          <StatusName>Seu story</StatusName>
          <PlusButton src="/plusButton.svg" />
        </StatusProfile>

        <StatusItem>
          <StatusBorder>
            <ImageRounded
              src="http://github.com/mfortunat0.png"
              width={56}
              height={56}
            />
          </StatusBorder>
          <StatusName>other</StatusName>
        </StatusItem>
        <StatusItem>
          <StatusBorder>
            <ImageRounded
              src="http://github.com/mfortunat0.png"
              width={56}
              height={56}
            />
          </StatusBorder>
          <StatusName>other</StatusName>
        </StatusItem>
        <StatusItem>
          <StatusBorder>
            <ImageRounded
              src="http://github.com/mfortunat0.png"
              width={56}
              height={56}
            />
          </StatusBorder>
          <StatusName>other</StatusName>
        </StatusItem>
        <StatusItem>
          <StatusBorder>
            <ImageRounded
              src="http://github.com/mfortunat0.png"
              width={56}
              height={56}
            />
          </StatusBorder>
          <StatusName>other</StatusName>
        </StatusItem>
        <StatusItem>
          <StatusBorder>
            <ImageRounded
              src="http://github.com/mfortunat0.png"
              width={56}
              height={56}
            />
          </StatusBorder>
          <StatusName>other</StatusName>
        </StatusItem>
        <StatusItem>
          <StatusBorder>
            <ImageRounded
              src="http://github.com/mfortunat0.png"
              width={56}
              height={56}
            />
          </StatusBorder>
          <StatusName>other</StatusName>
        </StatusItem>
      </Status>
      <Bar />
      <Post />
    </Main>
  );
}
