import AsyncStorage from "@react-native-async-storage/async-storage";
import { EAT_COLLECTION } from "@storage/storageConfig";

type EatProps = {
    eat?: string;
    description?: string;
    date?: string;
    time?: string;
    diet?: boolean;  
    id?: string;
  }

export async function eatsGetAll()  {
    try {
        const storage = await AsyncStorage.getItem(EAT_COLLECTION);
        const eats: EatProps[] = storage ? JSON.parse(storage) : [];
        return eats;
    } catch(error) {
        throw error;
    }
}