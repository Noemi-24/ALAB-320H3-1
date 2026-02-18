import Score from './Score.jsx'

function Learner({name, bio, date, score}){
    return(
        <div>
            <h2>Name: {name}</h2>
            <p>Bio: {bio}</p>
            <Score date = {date} score = {score}/>
        </div>
    );
}

export default Learner;