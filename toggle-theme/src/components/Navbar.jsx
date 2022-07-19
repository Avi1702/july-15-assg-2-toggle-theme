import React from 'react'
import { useContext } from 'react'
import { ToggleContext } from './ToggleContext'

export const Navbar = () => {

    const {Theme,handleToggle}=useContext(ToggleContext)

  return (
     Theme==="light" ? <div style={{backgroundColor:"white",width:"80%",margin:"auto",display:"flex",alignItems:"center",borderRadius:"10px",marginTop:"50px",padding:"20px"}}><button style={{color:"white",backgroundColor:"black"}} onClick={handleToggle}>Toggle Theme</button></div>
     :<div style={{backgroundColor:"black",width:"80%",margin:"auto",display:"flex",alignItems:"center",borderRadius:"10px",marginTop:"50px",padding:"20px"}}><button style={{color:"white",backgroundColor:"orange"}} onClick={handleToggle}>Toggle Theme</button></div>
  )
}
