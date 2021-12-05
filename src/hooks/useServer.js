import { useState, useEffect } from "react";
import { searchURL, ticketsURL } from '../utils/constants';


export const useTickets = () => {    
    const [response, setResponse] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {        
        setError(null);
        setIsPending(true);

        const getTickets = async () => {
            try {
                let searchIdResponse = await fetch(searchURL);
                searchIdResponse = await searchIdResponse.json();

                let ticketsResponse = await fetch(`${ticketsURL}/tickets?searchId=${searchIdResponse.searchId}`)
                ticketsResponse = await ticketsResponse.json();

                setResponse(ticketsResponse);
                setIsPending(false);
            } catch (err) {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        }
        getTickets();
    }, []);

    return { response, isPending, error };
}