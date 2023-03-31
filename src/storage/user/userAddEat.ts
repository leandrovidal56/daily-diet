

import AsyncStorage from "@react-native-async-storage/async-storage";
import { EAT_COLLECTION } from "@storage/storageConfig";
import { eatsGetAll } from "./userGetEat";


export async function eatAddByUser(eat: string, description: string, diet: any, date: any, time: string,) {
    try {
        
        const eats = await eatsGetAll()

        const object = {id: new Date().getTime(), eat, description, diet, date, time}
        const array = [...eats, object]

        const storage = JSON.stringify(array);
        await AsyncStorage.setItem(EAT_COLLECTION, storage)
    }catch (error) {
        throw(error)
    }
}

/*

const array = [
  {
    id: 1,
    name: "Kratos",
  },
  {
    id: 2,
    name: "Atreus",
  },
  {
    id: 3,
    name: "Batman",
  },
  {
    id: 4,
    name: "Vegeta",
  },
  {
    id: 5,
    name: "Goku",
  },
];

// recuperar a informação a ser editada = ok 

const id = 3;
const index = array.find((item) => item.id === id);

// novo objeto contendo as atualizacoes = ok 
const item = { ...index, name: "Batman Editado" };

// agora precisamos substituir o item dentro do array principal

// achando o index do nosso objeto a ser editado
const objIndex = array.findIndex((i) => i.id === id);

// substituindo o item anterior pelo item atualizado
const arr = array.splice(objIndex, 1, item);

console.log(array);

*/