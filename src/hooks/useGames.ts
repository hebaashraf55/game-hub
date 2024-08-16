import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image : string;
    parent_platforms : {platform : Platform;}[];
    metacritic : number; 
  }
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading , setIsloading ] = useState(false);
  
    useEffect(() => {

        const controllar = new AbortController();
        setIsloading(true);
      apiClient
        .get<FetchGamesResponse>("/games", { signal : controllar.signal})
        .then((res) =>  {
          setGames(res.data.results);
          setIsloading(false);
        })
        .catch((err) => {
             if (err instanceof CanceledError ) return;
             setError(err.message);
             setIsloading(false)}
            );

        return () => controllar.abort();
    }, []);

    return { games , error, isLoading };

}

export default useGames ;