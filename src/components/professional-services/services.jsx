import React from 'react'
import { AboutServices } from './aboutServices'
import { CardServices } from './cardServices'
import { CarServices } from './carServices'

export const Services = () => {
  return (
    <div className='my-60' >
        <AboutServices/>
        <CardServices/>
        <CarServices/>
    </div>
  )
}
