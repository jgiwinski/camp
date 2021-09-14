import './Footer.scss'; 
import westArete from '../../graphics/logos/WestArete.png';
import techExtra from '../../graphics/logos/TechExtra.png';
import inCommon from '../../graphics/logos/InCommon.png'; 
import geant from '../../graphics/logos/Geant.jpeg'; 
import internet2 from '../../graphics/logos/Internet2.png'; 


export const Footer = () => {
    return (
        <footer>
            <div className='ground-sign'>
                <img className='logo' src={techExtra} alt='Tech Extra logo'></img>
            </div>
            <div className='ground-sign'>
                <img className='logo' src={inCommon} alt='In Common logo'></img>
            </div>
            <div className='ground-sign'>
                <img className='logo' src={geant} alt='Geant logo'></img>
            </div>
            <div className='ground-sign'>
                <img className='logo' src={westArete} alt='West Arete logo'></img>
            </div>
            {/* <div className='ground-sign'>
                <img className='logo' src={internet2} alt='Internet2 logo'></img>
            </div> */}
        </footer>
    )
}