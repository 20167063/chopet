import React from 'react'
import Listpet from '../Listpet/Listpet'

import './content.css'

export default function Content(){
  return(
    <div className="contentPet">
      <img src="https://asset.chopet.vn/temps/19-05-2021/157db409258bbdc4a3cc9a571a172cdb875b8746.jpg?t=webp" className="banner" alt="bannerQc" />
      <Listpet />
     
    </div>
  )
}
