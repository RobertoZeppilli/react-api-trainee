import { useEffect, useState, useCallback } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchTours = useCallback(async () => {
        const res = await fetch(url)
        const tours = await res.json()
        console.log(tours)
        setData(tours)
        setLoading(false)
    }, [url])

    useEffect(() => {
        fetchTours()
    }, [url, fetchTours])

    return { data, loading }
}

