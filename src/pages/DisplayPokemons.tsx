import DisplayPokemonsComponent from "../components/DisplayPokemons";
import { RootState, useAppDispatch } from "../state/store";
import { useEffect } from "react";
import { getPokemons } from "../services/pokemonServices";
import { useSelector } from "react-redux";
import { selectPokemonsState } from "../state/slice/pokemonSlice";

const DisplayPokemons = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {dispatch(getPokemons())}, [dispatch])
  
    const pokemons = useSelector((state: RootState) => state.pokemons)
    const slicepokemons = useSelector(selectPokemonsState())
    // const error = useSelector(selectProductsFetchError())
    console.log(slicepokemons)
    // console.log(pokemons.pokemons[0].name)

    return (
        <div className='main_content'>
            {pokemons.pokemons.map((pokemon)=> <DisplayPokemonsComponent props={pokemon}/>)}
        </div>
    )
}

export default DisplayPokemons;