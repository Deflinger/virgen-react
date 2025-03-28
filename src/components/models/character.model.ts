export interface Character{
    name:string;
    gender: string;
    status:string;
    age: number;
    Job:string
}

export const emptyCharacter : Character = {
    name:"",
    gender: "" ,
    status:"",
    age: 0,
    Job:""
}