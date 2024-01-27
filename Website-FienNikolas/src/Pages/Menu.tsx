import React, { useRef } from 'react'
import '@mantine/carousel/styles.css'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel } from '@mantine/carousel'
import '../App.css'
import FotoTafelZaal from '../assets/FotoTafelZaal.jpeg'
import FotoResStoel from '../assets/FotoResStoel.jpg'
import FotoBarEnDrank from '../assets/FotoBarEnDrank.jpeg'

const Menu = () => {
  const autoplay = useRef(Autoplay({ delay: 6000 }))

  return (
    <div id='Menu' className='carousel-container mt-32 font-light' >
      <div className='overlay-title flex justify-center'>
        <span className=' overay-title text-TextDark text-7xl pb-20'>Menu</span>
      </div>
      <div  className='overlay-text bg-Primary opacity-80 shadow-xl border rounded-xl p-6 w-1/2 mb-4 text-xl mt-10'>
        <h2 className='font-bold hover:text-Bronze duration-500' >Eerhoorentjesbrood</h2>
        <h3 className='mb-6'>aardpeer - spitskool - jeneverbes - ponzu</h3>
        <h2 className='font-bold hover:text-Bronze duration-500' >Artisjok</h2>
        <h3 className='mb-6'>Prei - verse geitenkaas - ravioli - pistache</h3>
        <h2 className='font-bold hover:text-Bronze duration-500' >Witte truffel</h2>
        <h3 className='mb-6'>Zilverui - zwarte knoflook - paprika - verjus</h3>
        <h2 className='font-bold hover:text-Bronze duration-500' >Witloof</h2>
        <h3 className='mb-6'>Knolselder - grot - spruit - zuurbes</h3>
        <h2 className='font-bold hover:text-Bronze duration-500' >fontainebleau</h2>
        <h3 className='mb-6'>framboos - agastache - pomelo - anaperitivo</h3>
      </div>

      <div className='white-background-container'>
        <Carousel withIndicators height={200} plugins={[autoplay.current]} className='carousel'>
          <Carousel.Slide className='carousel-slide'>
            <img src={FotoResStoel} alt='FotoResStoel' className='carousel-image' />
          </Carousel.Slide>
          <Carousel.Slide className='carousel-slide'>
            <img src={FotoTafelZaal} alt='FotoTafelZaal' className='carousel-image' />
          </Carousel.Slide>
          <Carousel.Slide className='carousel-slide'>
            <img src={FotoBarEnDrank} alt='FotoBarEnDrank' className='carousel-image' />
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  )
}

export default Menu
