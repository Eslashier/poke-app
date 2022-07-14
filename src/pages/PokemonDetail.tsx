import "./grid.css"
import { Link, useLocation } from "react-router-dom";
import DisplayPokemonsComponent from "../components/DisplayPokemonsComponent";

const PokemonDetail = () => {

    const location = useLocation()
    const localState = location.state as any;
    const { pokemonToShow } = localState

    return (
        <div>
            <br/>
            <div className='containerPokemons' >
                <DisplayPokemonsComponent key={pokemonToShow.name} props={pokemonToShow} />
            </div>
            <div className="center">
                <Link to='/'>
                    <button className="buttonBack">
                        &lt; &lt; Regresar a la lista
                    </button>
                </Link>
            </div>
        </div>
    )

}

export default PokemonDetail;