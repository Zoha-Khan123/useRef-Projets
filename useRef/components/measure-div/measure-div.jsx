import React, { useEffect, useState , useRef } from 'react'

const MeasureDivWidth = () => {
    const divRef = useRef(null);
    const [width,setWidth] = useState(0);

    useEffect(()=>{
    if(divRef.current){
        setWidth(divRef.current.offsetWidth);
    }
    },[])
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:"center",alignItems:'center', width:'100vw'}}>
        <h1>Measure Div Width</h1>
      <div ref={divRef} style={{display:'flex',flexDirection:'column',justifyContent:"center",alignItems:'center',width:'50%', height: '100px' , backgroundColor:"red",color:'white',fontSize:'20px'}}>
        This is a div
      </div>
      <h4>The width of a div is {width}px</h4>
    </div>
  )
}

export default MeasureDivWidth