import { useState, useEffect } from "react";
import { searchURL, ticketsURL } from '../utils/constants';
import axios from "axios";

export const useTickets = () => {    
    const [tickets, setTickets] = useState([]);    
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {        
        setError(null);
        setIsPending(true);

        const getSearchId = async () => {
            try {
                return await axios.get(searchURL);                     
            } catch (err) {
                console.log(err.message);
                setIsPending(false);
                setError(err.message);                
            }
        }

        const subscribe = async (searchId) => {            
            try {                
                setIsPending(true);

                const ticketsResponse = await axios.get(`${ticketsURL}/tickets?searchId=${searchId}`);
                setTickets(prev => [...prev, ...ticketsResponse.data.tickets]);

                if (!ticketsResponse.data.stop) {
                    await subscribe(searchId);                    
                } else {
                    setIsPending(false);
                }
            } catch (error) {
                setTimeout(() => {
                    subscribe(searchId);
                }, 1000);
            }
        }

        getSearchId()
            .then(({data}) => subscribe(data.searchId));        

    }, []);

    return { tickets, isPending, error };
}