import React from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './MenuCard'
import { useState } from 'react'
const Resturant = () => {
   const [menuData,setMenu]=useState(Menu);
  return(    
    <>
    <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant