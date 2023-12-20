'use client'

import React from 'react'
import Image from 'next/image'
import { CustomButton } from '.'


interface Props {
    
}

const Hero = (props: Props) => {

    const HandleScroll=()=>{

    }
    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>Find, book, or rent a car -- quicly and easily</h1>
                <p>
                    Streamline your car rental  experience with our effortless 
                    booking process.
                </p>
                <CustomButton 
                title={'Explore Cars'}
                containerStyles='bg-primary-blue text-white rounded-full mt-10'
                handleClick={HandleScroll}
                />
            </div>

            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src='/hero.png' alt='' fill className='object-contain'></Image>
                </div>
                <div className='hero__image-overlay'/>
            </div>
        </div>
    )
}

export default Hero
