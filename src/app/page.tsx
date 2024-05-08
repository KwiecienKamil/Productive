import ReusableForm from "./components/ReusableForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full ">
      <p className="text-2xl pb-8 text-center ">
        Welcome to <span className="font-bold">Productive</span>
      </p>
      <ReusableForm />
    </div>
  );
}
