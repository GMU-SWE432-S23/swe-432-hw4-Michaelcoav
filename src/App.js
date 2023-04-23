import './App.css';
import Quiz from './Components/quiz';
import Prompt from './Components/prompt';
import AnswerChoices from './Components/answerChoices';
import Question from './Components/question';

import { useState } from 'react';


function App() {
  const [hasStarted, setHasStarted] = useState(false);

  const choices = [{answerChoice: 4, isCorrect: true}, {answerChoice: 2, isCorrect: false}, {answerChoice: 3, isCorrect: false}, {answerChoice: 1, isCorrect: false}];

  const answerChoices = <AnswerChoices choices={choices}/>;
  
  const prompt = <Prompt questionPrompt={"What is 2 + 2"}/>;

  const questions = [<Question prompt={prompt} answerChoices={answerChoices}/>];

  return (
    <div>
      {hasStarted ? <Quiz questions={questions}/> : null}
    </div>
  );
}

export default App;
