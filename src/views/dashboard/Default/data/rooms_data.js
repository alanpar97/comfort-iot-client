import { useState, useEffect } from 'react';

export const LoadInitialRooms = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url, {method: 'POST'});
            const json = await response.json();
            setData(json);
            setLoading(false);
        }
        fetchData();
    }, [url]);
    return [data, loading];
}