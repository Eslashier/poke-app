import DisplayPokemonsComponent from "../components/DisplayPokemons";
import { RootState, useAppDispatch } from "../state/store";
import { useEffect } from "react";
import { getPokemons } from "../services/pokemonServices";
import { useSelector } from "react-redux";
import { pokemonType, selectPokemonsState } from "../state/slice/pokemonSlice";
import { getPokemonDetails } from "../services/pokemonDetailServices";
import { selectPokemonDetailState } from "../state/slice/pokemonDetailSlice";
import CallPokemons from "./CallPokemons";

const DisplayPokemons = () => {

    const dispatch = useAppDispatch()

    useEffect(() => { dispatch(getPokemons()) }, [dispatch])

    const pokemons = useSelector(selectPokemonsState())

    console.log(pokemons)

    let pokemonDetail = []

    async function pokemonDetailFunction(pokemon:pokemonType){
        await fetch(pokemon.url)
            .then(response => response.json())
            .then(data => pokemonDetail.push(data));
    }

    pokemons.map((pokemon)=>pokemonDetailFunction(pokemon))

    console.log(pokemonDetail)

    return (
        <div className='main_content'>
            {pokemons.map((pokemonDetail) => <DisplayPokemonsComponent key={pokemonDetail.name} props={pokemonDetail} />)}
        </div>
    )
}

export default DisplayPokemons;