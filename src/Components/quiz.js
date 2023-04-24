import { useState } from "react";

import { Card, CardContent, Typography } from "@mui/material";
import ChangeQuestion from "./changeQuestion";
import SubmitQuiz from "./submitQuiz";
import FinishedQuiz from "./finishedQuiz";

// represents the quiz that will store will be based off the questions
const Quiz = ({questions}) => {
    // question number will be used to determine which question to render, can be changed by change question component
    const [questionNumber, setQuestionNumber] = useState(0);
    
    // is used to render a ending card after submit button is clicked
    const [isDone, setIsDone] = useState(false);

    return (
        <Card className="quiz" variant="outlined">

            {isDone ? <FinishedQuiz /> : <div></div>}
            
            <CardContent>
                <Typography className="center-text" variant="h5">
                    {questionNumber + 1} / {3}
                </Typography>


                {questions[questionNumber]}

                <br />

                <ChangeQuestion questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} minQuestions={0} maxQuestions={2}/>  
                
                <SubmitQuiz isDone={isDone} setIsDone={setIsDone}/>
                           
            </CardContent>
        </Card>
    );
};

export default Quiz;