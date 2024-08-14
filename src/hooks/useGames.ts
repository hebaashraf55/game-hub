import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Game {
    id: number;
    name: string;
    background_image : string;
  }
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {

        const controllar = new AbortController();

      apiClient
        .get<FetchGamesResponse>("/games", { signal : controllar.signal})
        .then((res) =>  setGames(res.data.results))
        .catch((err) => {
             if (err instanceof CanceledError ) return;
             setError(err.message)}
            );

        return () => controllar.abort();
    }, []);

    return { games , error };

}

export default useGames ;