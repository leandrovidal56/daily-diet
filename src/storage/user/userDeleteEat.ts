

import AsyncStorage from "@react-native-async-storage/async-storage";
import { EAT_COLLECTION } from "@storage/storageConfig";
import { eatsGetAll } from "./userGetEat";


export async function eatDeleteByUser(item: Object) {
    try {
        
        const storage = await eatsGetAll()
        const filtered = storage.filter(item => item.id !== item.id);
        console.log(filtered, 'verificar se deletou antes');
        
        // const eats = JSON.stringify(filtered);
        // await AsyncStorage.setItem(`${EAT_COLLECTION}`, eats)
        console.log(storage, 'verificar se deletou depois');




    }catch (error) {
        throw(error)
    }
}