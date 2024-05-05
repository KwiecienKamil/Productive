import Navbar from "./components/Navbar";
import Rewards from "./components/Rewards";
import Tasks from "./components/Tasks";

export default function Home() {
  return (
    <>
      <Navbar />
      <Tasks />
      <Rewards />
    </>
  );
}
