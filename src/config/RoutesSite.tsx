import { Route, Routes } from "react-router-dom"
import DisplayPokemons from "../pages/DisplayPokemons"
import Login from "../pages/LogIn"
import PokemonDetail from "../pages/PokemonDetail"
import SearchPokemons from "../pages/SearchPokemons"

export default function RoutesSite() {
    // const { user } = useSelector((state: RootState) => state.logging)

    if(true){
        return(
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<DisplayPokemons />} />
            <Route path='/search' element={<SearchPokemons />} />
            <Route path='/pokemon-detail' element={<PokemonDetail />} />
        </Routes>
        )
    }
    return (
        <Routes>
            <Route path='/Login'  />
        </Routes>
    )
}