import React,{useRef, useEffect} from 'react';
import LoadingBar from 'react-top-loading-bar'

const Loader = () => {
    const ref = useRef(null);

    useEffect(()=>{
        ref.current.continuousStart();
    },[])

    return(
        <LoadingBar color='#002f34' ref={ref} />
    )
}

export default Loader;