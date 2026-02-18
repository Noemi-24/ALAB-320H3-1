import './App.css'
import Learner from './components/Learner'
import learnersData from './data/learnersData';

function App() {
  return (
    <>
       {learnersData.map(learner => (
          <Learner key={learner.name} {...learner} />
        ))}
      
    </>
  );
}

export default App
