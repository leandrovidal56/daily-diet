

import AsyncStorage from "@react-native-async-storage/async-storage";
import { EAT_COLLECTION } from "@storage/storageConfig";
import { eatsGetAll } from "./userGetEat";


export async function eatDeleteByUser(item: Object) {
    try {
        console.log(item, 'take item')
        console.log(item.id, 'take item')
        
        const storage = await eatsGetAll()
        console.log(storage, 'storage')
        const filtered = storage.filter(object => object.id !== item.id);
        console.log(filtered, 'verificar se deletou antes');
        
        await AsyncStorage.setItem(EAT_COLLECTION, JSON.stringify(filtered));


    }catch (error) {
        throw(error)
    }
}