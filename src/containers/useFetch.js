import { useEffect, useState } from 'react';

export const useFetch = url => {
    const [state, setState] = useState({ data: null, loading: true })
    useEffect(() => {
        setState(state => ({ data: state.data, isloading: true }));
        fetch(url)
            .then(response => response.json())
            .then(result => setState({ data: result, isloading: false }))
            .catch(error => console.log(error))
    }, [url, setState])

    return state
}