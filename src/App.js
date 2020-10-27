import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamComponent from "./components/IceCreamComponent";
import HookIceCreamContainer from "./components/HookIceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamComponent />
        <HookIceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
