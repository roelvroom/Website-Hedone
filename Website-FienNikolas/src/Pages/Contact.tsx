const Contact = () => {
  return (
    <div id='Contact' className='w-3/4 m-auto pb-20'>
      <h1 className='text-5xl text-center py-28'>Contact</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <h1 className='font-bold pb-2'>Adress</h1>
            <p>Janssensstraat 34</p>
            <p>Tongeren 3717</p>

            <br />

            <h1 className='font-bold pb-2'>Parkeermogelijkheden</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem possimus quaerat
              laboriosam necessitatibus quas modi
            </p>

            <br />

            <h1 className='font-bold pb-2'>Sluit dagen</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, odio. Ab atque
              temporibus harum error natus
            </p>
          </div>
          <div>
            <h1 className='font-bold pb-2'>Openings uren</h1>
            <p>Maandag - van 0.00 tot 0.00</p>
            <p>Dinsdag - van 0.00 tot 0.00</p>
            <p>Woensdag - van 0.00 tot 0.00</p>
            <p>Donderdag - van 0.00 tot 0.00</p>
            <p>Vrijdag - van 0.00 tot 0.00</p>
            <p>Zaterdag - van 0.00 tot 0.00</p>
            <p>Zondag - van 0.00 tot 0.00</p>

            <br />

            <h1 className='font-bold pb-2'>Overnachting mogelijkheden</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laboriosam magnam,
              ducimus quam facere accusantium
            </p>
          </div>
        </div>
        <div>
          <div className='bg-gray-300 rounded-xl'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.583560929147!2d5.470956873441008!3d50.78329286714229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0e3c89daa57ed%3A0x12c3e9f9dc131d62!2sStationslaan%206%2C%203700%20Tongeren!5e0!3m2!1snl!2sbe!4v1703508128235!5m2!1snl!2sbe'
              width='500'
              height='400'
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className="border-gray-300 border-8 rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
