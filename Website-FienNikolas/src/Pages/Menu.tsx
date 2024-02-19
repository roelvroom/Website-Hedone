import '../App.css'
import FotoBarEnDrank from '../assets/FotoBarEnDrank.jpeg'
import RevealBottom from '../Components/RevealBottom'
import FotoBuiten from '../assets/FotoBuiten.jpg'
import Reveal from '../Components/Reveal'

import Autoplay from 'embla-carousel-autoplay'
import { Carousel } from '@mantine/carousel'
import { useRef } from 'react'
import FotoResStoel from '../assets/FotoResStoel.jpg'
import FotoTafelZaal from '../assets/FotoTafelZaal.jpeg'

const Menu = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }))

  return (
    <div>
      <RevealBottom>
        <div className='flex justify-center'>
          <span className='overay-title text-TextDark text-7xl pt-20'>Menu</span>
        </div>
      </RevealBottom>

      <div id='Menu' className='grid mt-20'>
        <div className='grid grid-cols-2'>
          <div className='bg-Primary opacity-80 shadow-xl w-96 border p-5 mt-20 mx-auto font-light h-96 text-center'>
            <Reveal>
              <div>
                <h1 className='text-5xl mb-6'>
                  Lunch <span className='italic text-sm'>50</span>
                </h1>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className='font-bold'>Eerhoorentjesbrood</h2>
                <h3 className='mb-6'>aardpeer - spitskool - jeneverbes - ponzu</h3>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2 className='font-bold'>Witloof</h2>
                <h3 className='mb-6'>Knolselder - grot - spruit - zuurbes</h3>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2 className='font-bold'>fontainebleau</h2>
                <h3 className=''>framboos - agastache - pomelo - anaperitivo</h3>
              </div>
            </Reveal>
          </div>
          <Reveal>
            

            <div className='relative mx-auto'>
              <img
                src={FotoBarEnDrank}
                alt='FotoBarEnDrank'
                className='w-3/4 mt-20 h-[380px] object-cover mx-auto shadow-xl'
              />
            </div>
          </Reveal>
        </div>
        <div className='grid grid-cols-2'>
          <div>
            <Reveal>
              <div className='relative mx-auto'>
                <img
                  src={FotoBuiten}
                  alt='FotoBuiten'
                  className='w-3/4 mt-32 h-[705px] object-cover mx-auto shadow-xl'
                />
              </div>
            </Reveal>
          </div>
          <div className='bg-Primary opacity-80 shadow-xl border p-6 w-96 ml-20 mb-20 font-light mt-32 text-center'>
            <Reveal>
              <h1 className='text-5xl mb-6'>Diner</h1>
            </Reveal>
            <Reveal>
              <div>
                <h2 className='font-bold'>Eerhoorentjesbrood</h2>
                <h3 className='mb-6'>aardpeer - spitskool - jeneverbes - ponzu</h3>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2 className='font-bold'>Artisjok</h2>
                <h3 className='mb-6'>Prei - verse geitenkaas - ravioli - pistache</h3>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2 className='font-bold'>Witte truffel *</h2>
                <h3 className='mb-6'>Zilverui - zwarte knoflook - paprika - verjus</h3>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2 className='font-bold'>Witloof **</h2>
                <h3 className='mb-6'>Knolselder - grot - spruit - zuurbes</h3>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2 className='font-bold'>Stoofvlees</h2>
                <h3 className='mb-6'>frieten - homemade mayonaise - slaatje</h3>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2 className='font-bold'>fontainebleau</h2>
                <h3 className='mb-6'>framboos - agastache - pomelo - anaperitivo</h3>
              </div>
            </Reveal>
            <p className='italic text-sm'>4 gangen - 84</p>
            <p className='italic text-sm'>5 gangen * - 96</p>
            <p className='italic text-sm'>6 gangen ** - 107</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
