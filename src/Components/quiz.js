import { useState } from "react";

import { Card, CardContent } from "@mui/material";

import ChangeQuestion from "./changeQuestion";

const Quiz = ({questions}) => {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [timer, setTimer] = useState(30);

    const decreaseTimer = () => {
        if (timer == 0) {
            return;
        }
        
        setTimeout(() => {
            setTimer(timer - 1);
        }, 1000)
    }

    if (timer >= 0) {
        decreaseTimer();
    }
    
    return (
        <Card className="quiz" variant="outlined">
            <CardContent>
                <div className="quiz-top">
                    <div>
                        {questionNumber + 1}
                    </div>
                    {timer}
                </div>

                {questions[questionNumber]}

                <br />

                <ChangeQuestion questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} minQuestions={0} maxQuestions={4}/>    
            </CardContent>
        </Card>
    );
};

export default Quiz;