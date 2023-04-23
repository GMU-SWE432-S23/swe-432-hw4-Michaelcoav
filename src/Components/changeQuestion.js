import { Button, Typography } from "@mui/material";

const ChangeQuestion = ({questionNumber, setQuestionNumber, minQuestions, maxQuestions}) => {

    const prevQuestion = () => {
        if (questionNumber == minQuestions) {
            return;
        }

        setQuestionNumber(questionNumber - 1);
    }

    const nextQuestion = () => {
        if (questionNumber == maxQuestions) {
            return;
        }

        setQuestionNumber(questionNumber + 1);
    }

    return (
        <div className="change-question">
            <Button variant="outlined" onClick={prevQuestion}>
                <Typography variant="body3">
                    Prev
                </Typography>
            </Button>

            <Button variant="outlined">
                <Typography variant="body3" onClick={nextQuestion}>
                    Next
                </Typography>
            </Button>
        </div>        
    );
};

export default ChangeQuestion;