import { tailspin } from "ldrs";

tailspin.register();

const Loading = () => {
  return (
    <div className="fixed z-[999] top-0 left-0 grid place-items-center w-full h-screen bg-white">
      <l-tailspin size="50" stroke="5" speed="0.9" color="black"></l-tailspin>
    </div>
  );
};

export default Loading;
