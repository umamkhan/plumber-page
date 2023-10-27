import React from 'react'
import TankContainer from './water tank/TankContainer'
import TapContainer from './tap repair/TapContainer'
import BasinContainer from './basin and sink/BasinContainer'
import ToiletContainer from './toilet/ToiletContainer'
import BathContainer from './bath fitting/BathContainer'

const FrequentlyContainer = () => {
  return (
    <div>
    <TankContainer/>
    <TapContainer/>
    <BasinContainer/>
    <ToiletContainer/>
    <BathContainer/>
    </div>
  )
}

export default FrequentlyContainer