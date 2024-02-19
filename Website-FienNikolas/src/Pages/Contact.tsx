import '../App.css'
import RevealBottom from '../Components/RevealBottom'
import { FaInstagram } from 'react-icons/fa'

const Contact = () => {
  return (
    <div id='Contact' className='w-3/4 m-auto pb-20 font-light'>
      <RevealBottom>
        <h1 className='text-7xl text-center text-TextDark py-20 md:py-14 md:my-10'>Contact</h1>
      </RevealBottom>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <div className='text-sm md:text-base'>
            <p>
              <span className='md:ms-0 font-bold'>Lunch</span> open 12u00 - 14u00
            </p>
            <p className='ms-12 md:ms-0 '>gesloten 17u00</p>
            <p>
              <span className='font-bold'>Diner</span> open 19u00 - 21u00
            </p>
            <p className='ms-12 md:ms-0 '>gesloten 00u30</p>
            <p>
              <span className='font-bold'>Gesloten</span> Zondag & Maandag
            </p>

            <br />

            <h1 className='font-bold pb-2'>Overnachting mogelijkheden</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laboriosam magnam,
              ducimus quam facere accusantium
            </p>
          </div>
          <div className='md:text-end'>
            <h1 className='font-bold'>Adress</h1>
            <p>Stationslaan 6</p>
            <p>Tongeren 3700</p>

            <br />

            <h1 className='font-bold'>Parkeermogelijkheden</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem possimus quaerat
              laboriosam necessitatibus quas modi
            </p>
            <div className='mt-6 md:ml-48'>
              <a href='het instagram acc' target='_blank' rel='nooper noreferrer' className=''>
                <FaInstagram className='h-8 w-8 ' aria-hidden='true' />
              </a>
            </div>

            <br />
          </div>
        </div>
        <div>
          <div className='bg-gray-300 w-full'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.583560929147!2d5.470956873441008!3d50.78329286714229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0e3c89daa57ed%3A0x12c3e9f9dc131d62!2sStationslaan%206%2C%203700%20Tongeren!5e0!3m2!1snl!2sbe!4v1703508128235!5m2!1snl!2sbe'
              height='370'
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='border-gray-300 border-8 w-full'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
