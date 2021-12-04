import { useState, useEffect } from "react";

const searchURL = "https://front-test.beta.aviasales.ru/search";

export const useSearch = () => {    
    const [searchId, setSearchId] = useState("");
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {        
        setError(null);
        setIsPending(true);

        const searchIdFromServer = fetch(searchURL)
            .then((res) => res.json())            
            .catch((err) => {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            });
        setSearchId(searchIdFromServer);
    }, []);

    return { searchId, isPending, error };
}