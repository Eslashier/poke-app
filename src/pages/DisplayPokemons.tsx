import DisplayPokemonsComponent from "../components/DisplayPokemons";
import { RootState, useAppDispatch } from "../state/store";
import { useEffect } from "react";
import { getPokemons } from "../services/pokemonServices";
import { useSelector } from "react-redux";
import { pokemonType, selectPokemonsState } from "../state/slice/pokemonSlice";
import { getPokemonDetails } from "../services/pokemonDetailServices";
import { selectPokemonDetailState } from "../state/slice/pokemonDetailSlice";

const DisplayPokemons = () => {

    const dispatch = useAppDispatch()

    useEffect(() => { dispatch(getPokemons()) })

    const pokemons = useSelector(selectPokemonsState())
    const pokemonDetail = useSelector(selectPokemonDetailState())

    const pokemondeprueba: pokemonType = {
        name: "bulbasaur",
        url: "test",
    }


    dispatch(getPokemonDetails(pokemondeprueba))

    console.log(pokemons)
    console.log(pokemonDetail)

    return (
        <div className='main_content'>
            {pokemons.map((pokemon) => <DisplayPokemonsComponent key={pokemon.name} props={pokemon} />)}
        </div>
    )
}

export default DisplayPokemons;