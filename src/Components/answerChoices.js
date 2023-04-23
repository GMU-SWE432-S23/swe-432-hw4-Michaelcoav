import { Stack } from "@mui/material";
import Choice from "./choice";

const AnswerChoices = ({choices}) => {
    return (
        <Stack spacing={2}>
            {choices.map((choice, index) => {
                const answerChoice = choice.answerChoice;
                const isCorrect = choice.isCorrect;

                return<Choice key={index} answerChoice={answerChoice} isCorrect={isCorrect}/>;
            })}
        </Stack>
    );
};

export default AnswerChoices;