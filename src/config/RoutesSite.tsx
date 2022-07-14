import { Route, Routes } from "react-router-dom"
import DisplayPokemons from "../pages/DisplayPokemons"
import PokemonDetail from "../pages/PokemonDetail"

export default function RoutesSite() {
    // const { user } = useSelector((state: RootState) => state.logging)

    if(true){
        return(
        <Routes>
            <Route path='/' element={<DisplayPokemons />} />
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