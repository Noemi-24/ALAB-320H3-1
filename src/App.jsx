import './App.css'
import Learner from './components/Learner'
import learnersData from './data/learnersData';

function App() {
  return (
    <main className='main-content'>
       {learnersData.map(learner => (
          <Learner key={learner.name} {...learner} />
        ))}
      
    </main>
  );
}

export default App
