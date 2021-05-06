import BottomBar from "../components/BottomBar";
import Feed from "./Feed";
import { useState } from "react";

export default function Home() {
  const [activeView, setActiveView] = useState("home");
  return (
    <>
      {activeView === "home" && <Feed />}
      {activeView === "search" && <h1>search</h1>}
      {activeView === "upload" && <h1>upload</h1>}
      {activeView === "heart" && <h1>heart</h1>}
      {activeView === "user" && <h1>user</h1>}
      <BottomBar active={activeView} setActiveView={setActiveView} />
    </>
  );
}
