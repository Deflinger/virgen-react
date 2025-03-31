const BASE_URL = "https://rickandmortyapi.com/api"
import axios from "axios"
import { Character, UseApiCall } from "../components/models"
import { LoadAbort } from "../utilities"

export const getCharacter = (id: number):UseApiCall<Character> =>{
    const controller = LoadAbort();
    return {
        call: axios.get<Character>(`${BASE_URL}/character/${id}`,{signal:controller.signal}),
        controller
    };
}

export const getSerena = () =>{
    return axios.get<Character>(`${BASE_URL}/characters/2`)
}


export const newCharacter = (character:Character) : UseApiCall<null> => {
    const controller = LoadAbort();
    return {
        call: axios.post<null>(`${BASE_URL}/characters`,
            character, 
            {signal:controller.signal}),
            controller
    }

}