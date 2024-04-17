import Aside from "./components/Aside";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className=" bg-stone-700 h-screen w-screen flex justify-center items-center">
        <div className=" w-[65rem] h-[35rem] bg-[#131313] rounded-md flex overflow-hidden">
          <Aside />
          <Main />
          <Aside />
        </div>
      </div>
    </>
  );
}

export default App;
