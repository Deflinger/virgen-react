import axios from "axios"
import { Character } from "../components/models"

const BASE_URL = "http://Ranster.com/api"

export const getRanster = () =>{
    return axios.get<Character>(`${BASE_URL}/character`)
}

export const getSerena = () =>{
    return axios.get<Character>(`${BASE_URL}/characters/2`)
}


export const getCharacter = (id:number) => {
    return axios.get<Character>(`${BASE_URL}/characters/${id}`)

}