import burger1 from '../assets/StockFotoBurger.jpg'
import burger2 from '../assets/StockFotoBurger2.jpg'

const About = () => {
  return (
    <div id='About' className='grid grid-cols-2 gap-3 p-14'>
      <section className='h-3/4'>
        <div className='bottom-3'>
          <img className='h-auto mb-2 rounded-xl' src={burger1} alt='burger' />
        </div>
        <div className='shadow-orange-200 shadow-md bottom-3 rounded-xl p-6 text-end'>
          <div className='pb-16'>
            <h1 className='text-5xl pb-5'>Fientje</h1>
            <hr />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut reprehenderit aut
            culpa! Impedit ea amet ipsa fuga natus labore iste ipsam repudiandae officiis dolorum.
            Quisquam nisi repellat omnis perspiciatis.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut reprehenderit aut
            culpa! Impedit ea amet ipsa fuga natus labore iste ipsam repudiandae officiis dolorum.
            Quisquam nisi repellat omnis perspiciatis.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut reprehenderit aut
            culpa! Impedit ea amet ipsa fuga natus labore iste ipsam repudiandae officiis dolorum.
            Quisquam nisi repellat omnis perspiciatis.
          </p>
        </div>
      </section>

      <section className='h-3/4'>
        <div className='shadow-orange-200 shadow-md rounded-xl bottom-3 p-6'>
          <div className='pb-16'>
            <h1 className='text-5xl pb-5'>Nickolaske</h1>
            <hr className='' />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut reprehenderit aut
            culpa! Impedit ea amet ipsa fuga natus labore iste ipsam repudiandae officiis dolorum.
            Quisquam nisi repellat omnis perspiciatis.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut reprehenderit aut
            culpa! Impedit ea amet ipsa fuga natus labore iste ipsam repudiandae officiis dolorum.
            Quisquam nisi repellat omnis perspiciatis.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut reprehenderit aut
            culpa! Impedit ea amet ipsa fuga natus labore iste ipsam repudiandae officiis dolorum.
            Quisquam nisi repellat omnis perspiciatis.
          </p>
        </div>
        <div className='bottom-3'>
          <img className='h-auto mt-2 rounded-xl' src={burger2} alt='burger2' />
        </div>
      </section>
    </div>
  )
}

export default About
