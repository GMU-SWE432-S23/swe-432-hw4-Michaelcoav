import './App.css';
import Quiz from './Components/quiz';
import StartQuiz from './Components/startQuiz';
import { useState } from 'react';
import questions from './quizQuestions';

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div>
      {hasStarted ? <Quiz questions={questions}/> : <StartQuiz hasStarted={hasStarted} setHasStarted={setHasStarted}/>}
    </div>
  );
}

export default App;
