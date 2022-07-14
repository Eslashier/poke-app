import { useEffect, useState } from "react";
import { ENDPOINTDETAIL } from "../config/apiConfig";
import "./cards.css"


const DisplayPokemonsComponent: React.FunctionComponent<any> = ({ props }) => {

    const [pokemonDetail, setPokemonDetails] = useState([]) as any

    useEffect(() => {
        const fetchPokemons = async () => {
            const data = await fetch(ENDPOINTDETAIL + props.name)
            const json = await data.json();
            setPokemonDetails(json)
        }
        fetchPokemons()
            .catch(console.error)
    }, [])

    return (
        <div className="card">
            <img src={pokemonDetail.sprites?.front_default} className="pokeImage"></img>
            <div className="container">
                <h2><b>{pokemonDetail.name}</b></h2>
                <div className="line"></div>

                <div className="containerTypes">
                    {pokemonDetail.types?.map((item: any) => {
                        return (
                            <div className="types" key={item.type.name}>
                                {item.type.name}
                            </div>
                        )
                    })}
                </div>
                
            </div>
        </div>
    )

}

export default DisplayPokemonsComponent

