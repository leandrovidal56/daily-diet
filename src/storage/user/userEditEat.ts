

import AsyncStorage from "@react-native-async-storage/async-storage";
import { EAT_COLLECTION } from "@storage/storageConfig";
import { eatsGetAll } from "./userGetEat";


export async function eatEditByUser(item: Object, title: string, description: string, diet: boolean) {
    try {
        
        // console.log(title, 'take item edit by user')
        // console.log(description, 'take item edit by user')
        // console.log(diet, 'take item edit by user')
        // console.log(item, 'take item edit by user')

        const storage = await eatsGetAll()
        console.log(storage, 'take storage first')
        
        const filtered = storage.find(item => item.id === item.id);        
        console.log(filtered, 'usuário a ser editado')

        // const filteredOther = storage.filter(item => item.id !== item.id);        
        ``


        
        // const teste = {...filtered, eat: title, description, diet: diet }
        
        // console.log(teste, 'usuário editado')

        // const newArray = {...storage, teste}

        // const itemString = JSON.stringify(newArray)

        // console.log(itemString, 'usuário editado')

        // const testeString = JSON.stringify(teste)
        // console.log(testeString, 'usuário editado')

        // await AsyncStorage.setItem(EAT_COLLECTION, itemString)


    }catch (error) {
        throw(error)
    }
}