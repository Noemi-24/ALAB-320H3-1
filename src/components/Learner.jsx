import Score from './Score.jsx'
import './Learner.css'

function Learner({name, bio, scores}){
    return(
        <div className='learner-container'>
            <h2>{name}</h2>
            <p>{bio}</p>
            <div className='scores-container'>
                {scores.map(score => (
                    <Score key={score.date} {...score} />
                ))} 
            </div>                       
        </div>       
    );
}

export default Learner;