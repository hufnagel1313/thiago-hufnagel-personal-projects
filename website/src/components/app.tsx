import { Provider } from "react-redux";
import { store } from "../state";
import OccasionsList from "./occasions/OccasionsList";

export const App = () => {
  return (
    <Provider store={store}>
      <OccasionsList></OccasionsList>
    </Provider>
  );
};

export default App;
