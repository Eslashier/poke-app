import { RootState, useAppDispatch } from "../state/store"
import { useEffect } from "react";
import { getPokemons } from "../services/pokemonServices";
import { useSelector } from "react-redux";
import DisplayPokemons from "../pages/DisplayPokemons";
import { pokemonType } from "../state/slice/pokemonSlice";

type pokemonPropsType = {
    props: pokemonType
}

const DisplayPokemonsComponent: React.FunctionComponent<pokemonPropsType> = ({ props }) => {
   
    return(
        <h1>{props.name}</h1>
    )
}

export default DisplayPokemonsComponent