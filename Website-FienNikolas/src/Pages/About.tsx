import BgFoto from '../assets/FotoResStoel.jpg'
import '../App.css'
import RevealBottom from '../Components/RevealBottom'

const About = () => {
  return (
    <div
      id='About'
      className='pt-20 relative mt-56 p-5 md:p-7'
      style={{
        minHeight: '50vh',
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BgFoto}) no-repeat center center fixed`,
        backgroundSize: 'cover',
      }}
    >
      <RevealBottom>
        <div className='overlay-title flex justify-center '>
          <span className=' overay-title text-TextDark text-7xl text-center'>
            Over ons
          </span>
        </div>
      </RevealBottom>
      <div className='max-w-4xl mx-auto flex flex-col items-center md:pb-24 md:gap-24 mt-12 '>
        <RevealBottom>
          <div className='bg-Primary text-sm md:text-base text-center md:text-start opacity-80 shadow-xl ml-14 md:ml-0 border p-6 w-3/4 mb-4 md:mr-72 font-light'>
            <p>
              Hēdonē is de oud-Griekse godin waar het hedonisme zijn naam aan te danken heeft.
              Centraal staan: genot, plezier en Bourgondisch leven. Daar weten chef Davine Croughs
              en sommelier Nicholas Neve intussen alles van. Zij werkte vijf jaar bij ’t Zilte in de
              keuken, hij was restaurantmanager en had in bijberoep een wijnhandel onder de naam The
              Hedonist Experience. Hun restaurant moet in het voorjaar 2024 opengaan. “Het wordt
              kleinschalig,” vertelt Nicholas, “gewoon wij twee, eventueel aangevuld met een
              afwasser op drukke momenten. Uit onze ervaring in de zaken waar we gewerkt hebben,
              beseffen we dat personeel vinden een grote uitdaging is.
            </p>
          </div>
        </RevealBottom>
        <RevealBottom>
          <div className='bg-Primary text-sm md:text-base text-center md:text-start opacity-80 shadow-xl ml-14 md:mt-0  border p-6 w-3/4 mb-4 md:ml-56 font-light'>
            <p>
              Met Hēdonē is voor Davine de cirkel rond want in het pand waar hun restaurant komt,
              begon ze ooit haar carrière in de horeca. Nicholas licht hun beslissing voor een eigen
              zaak toe: “Het principe van een restaurant runnen, deden we al, behalve dan de
              facturen betalen. We vroegen ons af ‘waarom doen we het niet voor onszelf?’.” Je eigen
              weg volgen is ook waar Davine van houdt in de keuken: “Chef zijn betekent mijn eigen
              ding kunnen doen, me kunnen uitleven, een stukje creativiteit kwijt kunnen. Iets
              klaarmaken waarvan je niet wist dat je het kon en dat dan waarmaken op een bord... dat
              vind ik een heel mooi aspect van koken.”
            </p>
          </div>
        </RevealBottom>
      </div>
    </div>
  )
}

export default About
