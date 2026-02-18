import './Score.css'

function Score({ date, score }) {
  return (
    <div className="score-box">
        <p className='date'>Date: {date}</p>
        <p className='score'>Score: {score}</p>
    </div>
  );
}

export default Score;