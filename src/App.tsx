import { Suspense, useState } from "react";
import Banner from "./component/Banner";
import Nav from "./component/Nav";
import Players from "./component/players/Players";
import type { TypeOfPlayer } from "./type/type";
import Footer from "./component/Footer";
import { ToastContainer, Zoom } from "react-toastify";

const playerFetch = async (): Promise<TypeOfPlayer[]> => {
  const res = await fetch("../public/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const playerPromise = playerFetch();

  const [coin, setCoin] = useState(5000);

  return (
    <>
      <Nav coin={coin} />
      <Banner />
      <Suspense fallback={<h1>data is comming.....</h1>}>
        <Players setCoin={setCoin} coin={coin} playerPromise={playerPromise} />
      </Suspense>
      <Footer />
      <ToastContainer transition={Zoom} />
    </>
  );
}

export default App;
