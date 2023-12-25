import { useState, useEffect } from 'react';
import '../App.css';
import FotoTafelZaal from '../assets/FotoTafelZaal.jpeg'
import FotoResStoel from '../assets/FotoResStoel.jpeg'

const Menu = () => {
  const fotoArray = [
    '../assets/FotoTafelZaal.jpeg',
    '../assets/FotoResStoel.jpeg',
  ];

  const [currentFotoIndex, setCurrentFotoIndex] = useState(0);

  const toggleFoto = () => {
    const yoffset = window.pageYOffset;

    if (yoffset > 1500 && yoffset < 2000) {
      setCurrentFotoIndex(0);
    } else {
      setCurrentFotoIndex(1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleFoto);

    return () => {
      window.removeEventListener('scroll', toggleFoto);
    };
  }, []);

  return (
    <div id='Menu' className='pt-32'>
      <h1 className='text-4xl mb-6 text-center'>Menu</h1>
      <div className={`bg-gray-600 flex justify-center image-transition`} style={{ opacity: '1', transitionDuration: '0.5s' }}>
        {fotoArray.map((foto, index) => (
          <div key={index} className={`foto-container ${currentFotoIndex === index ? 'visible' : 'hidden'}`}>
            <img
              src={foto}
              alt={`Foto ${index + 1}`}
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
