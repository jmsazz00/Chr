import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Proposal from "./components/proposal";
import Warning from "./components/warning";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <main>
        <Warning />
        <Proposal />
      </main>
    </>
  );
}

export default App;
