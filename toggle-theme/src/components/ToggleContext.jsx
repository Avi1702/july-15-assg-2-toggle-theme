import React, { useState } from 'react'
import { createContext } from 'react'


export const ToggleContext=createContext()

export const ContextProvider = ({children}) => {

    const [Theme,setTheme]=useState("dark")

    const handleToggle=()=>{
        if(Theme==="dark"){
            setTheme("light")
        }
        else{
            setTheme("dark")
        }
        console.log(Theme)
    }
  return (
    <ToggleContext.Provider value={{Theme,handleToggle}}>{children}</ToggleContext.Provider>
  )
}
