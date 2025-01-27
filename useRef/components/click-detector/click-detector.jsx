import React, { useEffect, useRef, useState } from 'react';
import "./click-detector.css"

const ClickDetector = () => {
    const dropdownRef = useRef(null);
    const [isOpen,setIsOpen] = useState(false);

    const handleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleClickOutside = (e) => {
        if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
            setIsOpen(false)
        }
    }

    useEffect(()=>{
        document.addEventListener("mousedown",handleClickOutside)

        return()=>{
            document.addEventListener("mousedown",handleClickOutside)
        }
    },[])
  return (
    <div>
        <h1>ClickDetector</h1>
        <div className='drop-button'>

        <button onClick={handleDropdown}>Click</button>
        </div>
        {
            isOpen && (
                <div ref={dropdownRef} className='dropdown'>
                    <p>Hello I am Clicked</p>
                </div>
            )
        }
      
    </div>
  )
}

export default ClickDetector