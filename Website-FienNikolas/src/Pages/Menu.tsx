import DummyFotoRestaurant from '../assets/Dummyfotorestaurant.jpg'

const Menu = () => {
  return (
    <div>
      <h1 className='text-4xl mb-6 text-center'>Menu</h1>
      <div id='Menu' className='bg-gray-600 flex justify-center'>
        <img
          src={DummyFotoRestaurant}
          alt='testBanner'
          className='w-full h-full object-cover absolute mix-blend-overlay'
        />
        <section className='w-2/4 h-auto border my-7  bg-slate-200 rounded-lg'>
          <div className='text-center w-full mt-10'>
            <h2 className='mb-2'>
              <span className='font-bold text-xl '>Gang 1</span>
            </h2>
            <h3 className='text-lg mb-8'>Ingrediënten - Extra - Dummy - Data</h3>

            <h2 className='mb-2'>
              <span className='font-bold text-xl '>Gang 2</span>
            </h2>
            <h3 className='text-lg mb-8'>Ingrediënten - Extra - Dummy - Data</h3>

            <h2 className='mb-2'>
              <span className='font-bold text-xl '>Gang 3</span>
            </h2>
            <h3 className='text-lg mb-8'>Ingrediënten - Extra - Dummy - Data</h3>

            <h2 className='mb-2'>
              <span className='font-bold text-xl '>Gang 4</span>
            </h2>
            <h3 className='text-lg mb-8'>Ingrediënten - Extra - Dummy - Data</h3>

            <h2 className='mb-2'>
              <span className='font-bold text-xl'>Gang 5</span>
            </h2>
            <h3 className='text-lg mb-6'>Ingrediënten - Extra - Dummy - Data</h3>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Menu
