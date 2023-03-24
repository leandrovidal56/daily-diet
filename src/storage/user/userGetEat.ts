import AsyncStorage from "@react-native-async-storage/async-storage";

import { EAT_COLLECTION } from "@storage/storageConfig";


export async function eatsGetAll() {
    try {
        const storage = await AsyncStorage.getItem(EAT_COLLECTION);
        console.log(storage, 'take all processed');
        
        const eats: string[] = storage ? JSON.parse(storage) : [];
        
        console.log(eats, 'take all processed');
        return eats;
    } catch(error) {
        throw error;
    }
}