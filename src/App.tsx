import { Provider } from "react-redux"
import { store } from "./state/store"
import { BrowserRouter } from "react-router-dom";
import DisplayPokemons from "./pages/DisplayPokemons";

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <DisplayPokemons/>
      </Provider>
    </BrowserRouter>

  )
}

export default App
