import { useEffect, useState } from "react"


const useGithub = (userName: string) => {

    const [data, setdata] = useState<any>({})
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState({})


    useEffect(() => {

        fetch(`https://api.github.com/users/${userName}`)
            .then((res) => res.json())
            .then((data) => {
                setdata(data)
                setloading(false)
            })
            .catch((error) => {
                seterror(error)
                setloading(false)
            })

    }, [])

    return { data, loading, error }


}

export default useGithub