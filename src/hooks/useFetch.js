import { useEffect, useState } from 'react';

const useFetch = () => {
    const [products, setProducts] = useState([])
    const url = "fakedata.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [products])
    return [products, setProducts]
}

export default useFetch
