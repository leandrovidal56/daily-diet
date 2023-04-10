import AsyncStorage from "@react-native-async-storage/async-storage";
import { EAT_COLLECTION } from "@storage/storageConfig";
import { eatsGetAll } from "./userGetEat";

type EatProps = {
    eat?: string;
    description?: string;
    date?: string;
    time?: string;
    diet?: boolean;  
    id?: string;
  }

export async function eatDeleteByUser(item: EatProps) {
    try {
        const storage = await eatsGetAll()
        const filtered = storage.filter((object: EatProps) => object.id !== item.id);
        await AsyncStorage.setItem(EAT_COLLECTION, JSON.stringify(filtered));
    }catch (error) {
        console.error(error)
    }
}