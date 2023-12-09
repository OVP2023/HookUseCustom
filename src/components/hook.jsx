import { useState,useEffect } from 'react'

import axios from 'axios'

function UseJsonFetch(url,opt){
  const [data, setData] = useState(0);
  const [error,setError] = useState("no error")
  const [loading,setLoading] = useState(false)
 
    useEffect(() => {
      axios.get(url)
        .then(function (response) {
          if (response.status==200) setLoading(true)
          return response 
        })
        .then((response) => setData(response.data))
        .catch(error => setError(error))
      }, []) 
    

  return ([data,error,loading])
}

export  default UseJsonFetch

