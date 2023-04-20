import Random from "./components/Random"
import Tag from "./components/Tag";

export default function App() {
  return (

    <div className="w-full min-h-screen p-8 flex flex-col background relative overflow-x-hidden items-center">
      <h1 className=" bg-white rounded-xl text-center w-full
       px-10 py-3 text-xl lg:text-3xl font-bold ">
      RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>

  );
}
