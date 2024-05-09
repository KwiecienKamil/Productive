import LoginForm from "./components/LoginForm";
import ReusableForm from "./components/LoginForm";

export default function Home() {
  return (
    <div className="h-screen w-full flex-col flex items-center justify-center ">
      <p className="text-2xl pb-2 text-center">
        Welcome to <span className="font-semibold">Productive</span>
      </p>
      <p className="text-[#787878] pb-2 text-xl">Login</p>
      <LoginForm />
    </div>
  );
}
