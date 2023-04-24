import AnswerChoices from "./Components/answerChoices";
import Prompt from "./Components/prompt";
import Question from "./Components/question";

const firstChoiceSet = [{answerChoice: 4, isCorrect: false}, {answerChoice: 2, isCorrect: true}, {answerChoice: 3, isCorrect: false}, {answerChoice: -1, isCorrect: false}];
const secondChoiceSet = [{answerChoice: 2, isCorrect: false}, {answerChoice: 4, isCorrect: false}, {answerChoice: 0, isCorrect: true}, {answerChoice: 16, isCorrect: false}];
const thirdChoiceSet = [{answerChoice: 4, isCorrect: false}, {answerChoice: 8, isCorrect: false}, {answerChoice: -2, isCorrect: false}, {answerChoice: 1, isCorrect: true}];

const answerChoices = [<AnswerChoices choices={firstChoiceSet} />, <AnswerChoices choices={secondChoiceSet} />, <AnswerChoices choices={thirdChoiceSet}/>]
  
const prompts = [<Prompt questionPrompt={"2 + 2 - 2?"}/>, <Prompt questionPrompt={"2 ^ 0 * 0?"}/>, <Prompt questionPrompt={"2 * (1 / 2)?"}/>];

const questions = [];

for (let i = 0; i < 3; i++) {
    questions.push(<Question prompt={prompts[i]} answerChoices={answerChoices[i]}/>)
}

export default questions;