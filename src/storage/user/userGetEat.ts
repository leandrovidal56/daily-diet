import AsyncStorage from "@react-native-async-storage/async-storage";

import { EAT_COLLECTION } from "@storage/storageConfig";


export async function eatsGetAll() {
    try {
        const storage = await AsyncStorage.getItem(EAT_COLLECTION);
        
        
        const eats: string[] = storage ? JSON.parse(storage) : [];
        
        
        
        return eats;
    } catch(error) {
        throw error;
    }
}