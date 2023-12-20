'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import { CustomButton } from '.'
import { calculateCarRent, generateCarImageUrl } from '@/utils'
import {CarDetails} from '.'


interface CarCardProps{
    car:CarProps
}

const CarCard = ({car}:CarCardProps) => {

    const {city_mpg,year,make,model,transmission,drive}=car


    const [open,setIsOpen]=useState(false)
    const carRent=calculateCarRent(city_mpg,year)
  return (
    <div className='car-card group'>
        <div className='car-card__content'>
            <h2 className='car-card__content-title'>{make} {model}</h2>    
        </div>

        <p className='flex mt-5 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>
                $
            </span>
            {carRent}
            <span className='self-end text-[14px] font-medium'>
                /day
            </span>
        </p>

        <div className='relative w-full h-40 my-3 object-contain'>
            <Image src={generateCarImageUrl(car)} alt='' fill priority className='object-contain'></Image>
        </div>

        <div className='relative flex w-full mt-2'>
            <div className='flex group-hover:invisible w-full justify-between text-gray'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <Image src='/steering-wheel.svg' alt='' width={20} height={20}></Image>
                    <p>{transmission==='a'?"Automatic":"Manual"}</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <Image src='/tire.svg' alt='' width={20} height={20}></Image>
                    <p>{drive.toUpperCase()}</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <Image src='/gas.svg' alt='' width={20} height={20}></Image>
                    <p>{city_mpg} MPG</p>
                </div>
            </div>
            <div className='car-card__btn-container'>
                <CustomButton title='Rent'
                containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                textStyles="text-white leading-[17px] font-bold"
                rightIcon="/right-arrow.svg"
                handleClick={()=>setIsOpen(true)}
                />
            </div>
        </div>
        <CarDetails
        isOpen={open}
        closeModel={()=>setIsOpen(false)}
        car={car}
        />
    </div>
  )
}

export default CarCard