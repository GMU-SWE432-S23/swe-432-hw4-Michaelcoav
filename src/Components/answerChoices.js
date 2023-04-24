import Choice from "./choice";
import { nanoid } from "nanoid";

// represents all choices possible for a single question
const AnswerChoices = ({choices}) => {
    return (
        <ol className="list">
            {choices.map((choice) => {
                const answerChoice = choice.answerChoice;
                const isCorrect = choice.isCorrect;

                return (
                    <li key={nanoid()}>
                        <Choice answerChoice={answerChoice} isCorrect={isCorrect}/>
                    </li>
                );
                
            })}
        </ol>
    );
};

export default AnswerChoices;