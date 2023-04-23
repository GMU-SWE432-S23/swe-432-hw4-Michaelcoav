import { useState } from "react";

import { Button, Typography } from "@mui/material";

const Choice = ({answerChoice, isCorrect}) => {
    // used to show the background color of the choice
    const [color, setColor] = useState("white");

    // on click handler
    const showCorrectness = () => {
        if (isCorrect) {
            setColor("green");
        } else {
            setColor("red");
        }
    };
    
    return (
        <div className="choice" style={{backgroundColor: color}}>
            <Button variant="contained" onClick={showCorrectness}>
                <Typography variant="body2">
                    {answerChoice}
                </Typography>
            </Button>
        </div>
    );
};

export default Choice;