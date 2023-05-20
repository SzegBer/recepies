import { useEffect, useState } from "react"

export const useFetch = (url, options) => {

  const [data, setData] = useState()
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {

      try{
        const res = await fetch(url, {
          signal: controller.signal
        })
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        const data = await res.json()
        setData(data)
        setError(null)
        
      } catch (err) {
        if (err.name !== "AbortError") {
          setError('Could not fetch the data.')
        }
      }
    }

    fetchData()

    return () => {
      controller.abort()
    }

  },[url])

  return { data, error }
}