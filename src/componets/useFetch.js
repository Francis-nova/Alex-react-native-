
import React, { useEffect, useState } from 'react'
import { StyleSheet} from 'react-native'


const useFetch = () => {
    const BASE_URL = 'https://dummyapi.io/data/api';
    const APP_ID = '60a066927f11463e38f0ba00';

    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(null);
    const [data, setdata] = useState([]);

    useEffect(() => {
        const res = fetch(`${BASE_URL}/post?limit=10`, {headers: {'app-id': APP_ID}})
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setdata(data.data)
            // console.log(data.data)
        })
        
        
    }, [])

    return { data, loading, error};
}

export default useFetch;

const styles = StyleSheet.create({
    
})
