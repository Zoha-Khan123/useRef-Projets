import React, { useRef } from 'react'

export const FocusInput = () => {
    const focusRef = useRef(null);
    const focusInput = () => {
        focusRef.current.focus();
    }
  return (
    <>
    <div><h1>FocusInput</h1></div>
    <input ref={focusRef} type="text"/>
    <button onClick={focusInput}>Focus Input</button>
    </>
  )
}
