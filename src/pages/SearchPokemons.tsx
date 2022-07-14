import DisplayPokemonsComponent from "../components/DisplayPokemonsComponent";
import { useAppDispatch } from "../state/store";
import { useEffect, useState } from "react";
import { getPokemons } from "../services/pokemonServices";
import { useSelector } from "react-redux";
import { selectPokemonsState } from "../state/slice/pokemonSlice";
import "./grid.css"

const SearchPokemons = () => {

    const dispatch = useAppDispatch()
    useEffect(() => { dispatch(getPokemons()) }, [dispatch])
    const pokemons = useSelector(selectPokemonsState())

    const[pokemonsFiltered, setPokemonsFiltered] = useState(pokemons) as any

    const filterPokemons = (e:any)=>{
        let pokeFilter = pokemons.filter(
            poke => poke.name?.includes(e)
        )
        setPokemonsFiltered(pokeFilter)
    }
    
    return (
        <div>
            <div>
                <input type="search" placeholder="... search your pokemons" onChange={(e)=>(filterPokemons(e.target.value))}></input>
            </div>
            <div className='containerPokemons' >
                {(pokemonsFiltered || pokemons).map((pokemons: any) => (
                    <DisplayPokemonsComponent key={pokemons.name} props={pokemons} />
                ))}
            </div>
        </div>
    )

}

export default SearchPokemons;