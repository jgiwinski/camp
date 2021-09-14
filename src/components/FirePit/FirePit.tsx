import './FirePit.scss'; 
// import fire from '../../graphics/details/Campfire-1.png';

type firepit = {
    id?: number, 
    topic: string, 
    participants: string[], 
    link?: string
}

export const FirePit = ({ topic, participants, link }: firepit)=> {

    // if the number of participants is 9 or more than cut off and have a 'participant' of '2 more members'
    
    const topicMembers = participants.map(person => <li className='member-name'>{person}</li>)

    const clickLink = () => {
        window.open(link)
    }

    return (
        <section className='camp-fire-box'>
            <div className='participants' >
                {/* <img className='fire-img' src={fire} alt='Camp Fire'></img> */}
                <ul>{topicMembers}</ul>
            </div>
            <button className='topic' onClick={clickLink}>{topic}</button>
        </section>
    )
}

