import { afbeeldingen } from '../Components/data';

const Gallery = () => {
  return (
    <div className='p-4'>
      <h1 id="Gallery" className='text-TextDark text-7xl pt-36 text-center'>Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-20">
        {afbeeldingen.map((item, i) => (
          <div key={i} className={` ${i === 4 ? 'md:col-span-2 ' : ''}`}>
            <img src={item.afbeelding} alt={item.naam} className='' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
