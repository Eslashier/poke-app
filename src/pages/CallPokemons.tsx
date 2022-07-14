import DisplayPokemonsComponent from "../components/DisplayPokemons";
import { RootState, useAppDispatch } from "../state/store";
import { useEffect } from "react";
import { getPokemons } from "../services/pokemonServices";
import { useSelector } from "react-redux";
import { pokemonType, selectPokemonsState } from "../state/slice/pokemonSlice";
import { getPokemonDetails } from "../services/pokemonDetailServices";
import { selectPokemonDetailState } from "../state/slice/pokemonDetailSlice";

const CallPokemons = () => {

    const dispatch = useAppDispatch()

    useEffect(() => { dispatch(getPokemons()) }, [dispatch])

}

export default CallPokemons;