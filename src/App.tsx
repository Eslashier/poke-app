import { Provider, useSelector } from "react-redux"
import { RootState, store, useAppDispatch } from "./state/store"
import { BrowserRouter } from "react-router-dom";
import { getPokemons } from "./services/pokemonServices";
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
