import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface FetchResponse <T> {
    count : number;
    results : T[];
}
 const useData = <T>(endpoint: string) => {

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading , setIsloading ] = useState(false);
  
    useEffect(() => {
        const controllar = new AbortController();
        setIsloading(true);
      apiClient
        .get<FetchResponse<T>>  (endpoint, { signal : controllar.signal})
        .then((res) =>  {
          setData(res.data.results);
          setIsloading(false);
        })
        .catch((err) => {
             if (err instanceof CanceledError ) return;
             setError(err.message);
             setIsloading(false)}
            );

        return () => controllar.abort();
    }, []);

    return { data , error, isLoading };

 }

 export default useData;
