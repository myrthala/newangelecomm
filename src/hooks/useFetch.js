import { useEffect, useState } from "react";

export const useFetch = (url, id) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url) 
            .then(resp => resp.json())
            .then(data => setData(data))
    }, [id])

    return({
        data
    })
}