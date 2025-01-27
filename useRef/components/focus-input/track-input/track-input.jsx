import React , { useRef } from 'react'


const TrackInput = () => {
  const inputRef = useRef('');
  const displayRef = useRef(null);

  const handleInput = (e) => {
    inputRef.current = e.target.value;
    if(displayRef.current){
      displayRef.current.innerText = `Value : ${inputRef.current}`
    }
  }
  return (
    <div>
      <h1>TrackInput</h1>
      <input type="text" onChange={handleInput}/>
      <h3 ref={displayRef}></h3>
    </div>
  )
}

export default TrackInput