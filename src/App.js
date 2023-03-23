import MainRoutes from "./app/MainRoutes";
import "./App.css";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import UnprotectedRoutes from "./app/UnprotectedRoutes";
import { getCurrentAdmin } from "./helpers/Auth";
import { GlobalContext } from "./helpers/Context";
import { ToastContainer } from "react-toastify";
import Loader from "./components/loader/Loader";

function App() {
  const [loading, setIsLoading] = useState(false);
  const [admin, setAdmin] = useState(null);
  const [globalState, setGlobalState] = useState({});

  const updateGlobalState = (obj) => setGlobalState({ ...globalState, ...obj });

  useEffect(() => {
    setIsLoading(true);
    getCurrentAdmin()
      .then((admin) => {
        setAdmin(admin);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        globalState,
        updateGlobalState,
      }}
    >
      <ToastContainer hideProgressBar={true} />

      <Loader />
      {admin ? <MainRoutes /> : <UnprotectedRoutes />}
    </GlobalContext.Provider>
  );
}

export default App;
