import { useCallback, useEffect, useState } from "react";
import { UseApiCall } from "../components/models";


type UseApiOption<P> = {
    autoFetch?:boolean;
}& (P extends null ? {param?: P} : {params : P})
type Data<T> = T | null;
type CustomError = Error | null;


interface UseApiResult<T,P> {
    loading: boolean;
    data: Data<T>;
    error: CustomError;
    fetch:(param: P) => void;
}

export const useApi = <T, P,>(apiCall:(param: Param) => UseApiCall<T>, options?:UseApiOption<P>):UseApiResult<T,P> => {
    const [loading,setLoading] = useState<boolean>(false)
    const [data,setData] = useState<Data<T>>(null)
    const [error,setError] = useState<CustomError>(null)
    
    const fetch = useCallback((param?:P) => {
        const {call, controller} = apiCall(param);
        setLoading(true);

        call.then((response)=>{
            setData(response.data);
            setError(null);
        }).catch((err)=>{
            setError(err)
        }).finally(()=>{
            setLoading(false);
        })
        return () => controller.abort()
    },[apiCall])

    useEffect(() => {
        if(options?.autoFetch){
            return fetch(options.params);
        }
    },[fetch,options?.autoFetch])

    return {loading,data,error,fetch}
}
