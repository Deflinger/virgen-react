import axios from "axios"
import { Character } from "../components/models"
import { LoadAbort } from "../utilities"

const BASE_URL = "http://Ranster.com/api"

export const getRanster = () =>{
    const controller = LoadAbort();
    return {
        call: axios.get<Character>(`${BASE_URL}/character`,{signal:controller.signal}),
        controller
    };
}

export const getSerena = () =>{
    return axios.get<Character>(`${BASE_URL}/characters/2`)
}


export const getCharacter = (id:number) => {
    return axios.get<Character>(`${BASE_URL}/characters/${id}`)

}