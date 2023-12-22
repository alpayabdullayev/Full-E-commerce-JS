import React, { useEffect, useState } from 'react'

function useLocalStorage(key,initVal) {
    const [localData, setLocalData] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initVal)


    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(localData))
    }, [localData,key])
    
    function handleLocalStorage(data) {
        setLocalData(data)
    }

    return [localData,handleLocalStorage,setLocalData]
}

export default useLocalStorage