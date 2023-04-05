import AsyncStorage from "@react-native-async-storage/async-storage";
import { EAT_COLLECTION } from "@storage/storageConfig";
import { eatsGetAll } from "./userGetEat";


export async function eatDeleteByUser(item: Object) {
    try {
        const storage = await eatsGetAll()
        const filtered = storage.filter(object => object.id !== item.id);
        await AsyncStorage.setItem(EAT_COLLECTION, JSON.stringify(filtered));
    }catch (error) {
        throw(error)
    }
}