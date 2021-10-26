import { useEffect,useState } from "react"
const useFetch = (url) => {
    const[datas,setData]=useState(null)
    const[ispending,setispending]=useState(true)
    const[error,seterror]=useState(null)
    useEffect(()=>{
        const abort = new AbortController()
             fetch(url,{signal:abort.signal})
        .then( res=> {
            if(!res.ok){
                throw Error('Can\'t fetch data.. some internal server issue')
            }
            return res.json()
        }
            )
        .then( data => {
            setData(data)
            setispending(false)
        }).catch(err =>{
            if(err === 'AbortError'){
                console.log('fetch aborted')
            }else{

                seterror(err)
                setispending(false)
            }
        })

       return ()=> abort.abort()
    
    },[url])
    return {datas ,ispending,error};
}
 
export default useFetch;