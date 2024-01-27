import FienMetBrander from '../assets/FienMetBrander.jpg'
import BarMetPotten from '../assets/BarMetPotten.jpg'
import GedekteTafel from '../assets/GedekteTafel.jpg'
import TafelTegenGorijnen from '../assets/TafelTegenGorijnen.jpg'
import FotoBuiten from '../assets/FotoBuiten.jpg'
import TafelTegenBar from '../assets/TafelTegenBar.jpg'


interface ObjectMetAfbeelding {
    naam: string;
    afbeelding: string;
  }
  export const afbeeldingen: ObjectMetAfbeelding[] = [
    { naam: 'TafelTegenGorijnen', afbeelding: TafelTegenGorijnen },
    { naam: 'TafelTegenBar', afbeelding: TafelTegenBar },
    { naam: 'GedekteTafel', afbeelding: GedekteTafel },
    { naam: 'FotoBuiten', afbeelding: FotoBuiten },
    { naam: 'FienMetBrander', afbeelding: FienMetBrander },
    { naam: 'TafelTegenBar', afbeelding: TafelTegenBar },
    { naam: 'BarMetPotten', afbeelding: BarMetPotten },
    { naam: 'BarMetPotten', afbeelding: BarMetPotten },
  ]; 