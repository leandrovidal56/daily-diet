

import AsyncStorage from "@react-native-async-storage/async-storage";
import { EAT_COLLECTION } from "@storage/storageConfig";
import { eatsGetAll } from "./userGetEat";


export async function eatAddByUser(eat: string, description: string, diet: any, date: any, time: string) {
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

