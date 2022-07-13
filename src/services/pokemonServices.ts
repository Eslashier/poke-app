import { createAsyncThunk } from "@reduxjs/toolkit";
import { ENDPOINT } from "../config/apiConfig";
import {pokemonType} from "../state/slice/pokemonSlice"
 
export const getPokemons = createAsyncThunk('getPokemons', async () => {
    const response = await fetch(ENDPOINT, { 
        method: 'GET' 
    })
    let pokemons = await response.json();
    return (pokemons.results as pokemonType )
})