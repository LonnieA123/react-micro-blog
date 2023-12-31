import {useEffect, useState} from "react";

const useFetch = (url) => {
    //set data
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const abortCont = new AbortController();


        fetch(url, {signal: abortCont.signal})
            .then(res => {
                if (!res.ok){
                    throw Error('could not fetch data')
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsLoading(false)
                setError(null)
            })
            .catch(err => {
                if (abortCont.signal.aborted){
                    console.log('ABORTED')
                } else  {
                    setIsLoading(false)
                    setError(err.message)
                }
            })
        //aborts fetch whenever page changes
        return () => abortCont.abort();
    },[url]);

    return { data, isLoading, error}
}

export default useFetch;