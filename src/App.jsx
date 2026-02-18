import './App.css'
import Learner from './components/Learner'
import learnersData from './data/learnersData';

function App() {
  return (
    <>
      <header>
        <h1>Learners' Scores</h1>
      </header>
      <main className='main-content'>
        {learnersData.map((learner, index) => (
            <Learner key={index} {...learner} />
          ))}
        
      </main>
    </>
  );
}

export default App
