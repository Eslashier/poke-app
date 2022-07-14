import { Provider } from "react-redux"
import { store } from "./state/store"
import { BrowserRouter } from "react-router-dom";
import DisplayPokemons from "./pages/DisplayPokemons";
import RoutesSite from "./config/RoutesSite";

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <RoutesSite />
      </Provider>
    </BrowserRouter>

  )
}

export default App
