import './Header.scss'; 
import pine from '../../graphics/details/Tree-1.png'; 
import bear from '../../graphics/details/Bear.png';

export const Header = () => {
    return (
        <header>
            <img className='pine' src={pine} alt=' pine tree'></img>
            <img className='pine2' src={pine} alt=' pine tree'></img>
            <img className='bear' src={bear} alt=' bear'></img>
            <section className='banner'>
                <h1>CAMP / ACAMP 2021</h1>
            </section>
            <img className='pine3' src={pine} alt=' pine tree'></img>
            <img className='pine4' src={pine} alt=' pine tree'></img>
        </header>
    )
}