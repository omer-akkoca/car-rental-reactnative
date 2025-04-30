import { getFirestore, collection, getDocs } from '@react-native-firebase/firestore';

export const fetchCollection = async <T>(collectionName: string): Promise<T[]> => {
    try {
        const db = getFirestore()
        const colRef = collection(db, collectionName)
        const snapshot = await getDocs(colRef)
        const data = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() } as T
        })
        return data;
    } catch (error) {
        console.error('Error fetching collection:', error);
        throw error;
    }
};