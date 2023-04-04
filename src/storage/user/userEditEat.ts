

import AsyncStorage from "@react-native-async-storage/async-storage";
import { EAT_COLLECTION } from "@storage/storageConfig";
import { eatsGetAll } from "./userGetEat";


export async function eatEditByUser(item: Object, title: string, description: string, diet: boolean) {
    console.log(item, 'take item')
    try {
        const storage = await eatsGetAll()
        
        const filtered = storage.filter(object => object.id !== item.id);        
    
        const obj = { id: item.id, date: item.date, title, time: item.time, eat: title, description, diet };

        filtered.push(obj);

        await AsyncStorage.setItem(EAT_COLLECTION, JSON.stringify(filtered));


    }catch (error) {
        throw(error)
    }
}