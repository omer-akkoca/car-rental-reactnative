import { useEffect, useState } from "react";
import { fetchCollection } from "../services/firestoreService";

interface IUseCollection<T> {
    data: T[];
    loading: boolean;
    error: string;
}

export const useCollection = <T>(collectionName: string): IUseCollection<T> => {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        let isMounted = true

        const loadData = async () => {
            try {
                const result = await fetchCollection<T>(collectionName)
                if (isMounted) {
                    setData(result)
                    setLoading(false)
                }
            } catch (err) {
                if (isMounted) {
                    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
                    setError(errorMessage)
                    setLoading(false)
                }
            }
        };

        loadData();

        return () => { isMounted = false }
    }, [collectionName])

    return { data, loading, error };
}