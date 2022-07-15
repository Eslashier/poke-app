import { Provider } from "react-redux"
import { store } from "./state/store"
import { BrowserRouter } from "react-router-dom";
import RoutesSite from "./config/RoutesSite";
import Navbar from "./components/NavBar";

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar/>
        <RoutesSite />
      </Provider>
    </BrowserRouter>

  )
}

export default App
