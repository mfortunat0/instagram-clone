import { Navbar, Avatar } from "../styles/BottomBar";
import Image from "next/image";

export default function BottomBar({ active, setActiveView }) {
  return (
    <Navbar>
      <Image
        src={active === "home" ? "/homeActive.svg" : "/home.svg"}
        onClick={() => setActiveView("home")}
        height={24}
        width={24}
      />
      <Image
        src={active === "search" ? "/searchActive.svg" : "/search.svg"}
        onClick={() => setActiveView("search")}
        height={24}
        width={24}
      />
      <Image
        src="/upload.svg"
        onClick={() => setActiveView("upload")}
        height={24}
        width={24}
      />
      <Image
        src={active === "heart" ? "/heartActive.svg" : "/heart.svg"}
        onClick={() => setActiveView("heart")}
        height={24}
        width={24}
      />
      <Avatar
        src="http://github.com/mfortunat0.png"
        onClick={() => setActiveView("user")}
      />
    </Navbar>
  );
}
