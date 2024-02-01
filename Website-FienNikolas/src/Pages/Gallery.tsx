import RevealBottom from '../Components/RevealBottom'
import RevealGallery from '../Components/RevealGallery'
import { afbeeldingen } from '../Components/data'

const Gallery = () => {
  return (
    <div className='p-4'>
      <RevealBottom>
        <h1 id='Gallery' className='text-TextDark text-7xl pt-20 text-center'>
          Gallery
        </h1>
      </RevealBottom>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-20'>
        {afbeeldingen.map((item, i) => (
          <div key={i} className={` ${i === 4 ? 'md:col-span-2 ' : ''}`}>
            <RevealGallery>
              <img src={item.afbeelding} alt={item.naam} className='' />
            </RevealGallery>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
