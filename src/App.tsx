import "./App.css";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Transactions from "./components/Transactions";

import WebCardContextProvider, {
  webCardContextDataDefaultValue,
} from "./contexts/WebCardContext";
import "./App.css";

function App() {
  return (
    <WebCardContextProvider value={webCardContextDataDefaultValue}>
      <Cards />
      <Filter />
      <Transactions />
    </WebCardContextProvider>
  );
}

export default App;
