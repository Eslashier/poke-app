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

