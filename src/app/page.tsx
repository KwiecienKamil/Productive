import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div
        data-theme="light"
        className="h-screen px-[15%] flex justify-between pt-8"
      >
        <Navbar />
        <div className=""></div>
        <div className=""></div>
      </div>
    </>
  );
}
