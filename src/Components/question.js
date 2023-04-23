import { Card, CardContent } from "@mui/material";

import ChangeQuestion from "./changeQuestion";

const Question = ({prompt, answerChoices}) => {
    return (
        <div className="question">
            <div>
                {prompt}
                <br />
                {answerChoices}
            </div>
        </div>
    );
};

export default Question;