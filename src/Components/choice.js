import { useState } from "react";
import { Button, Typography } from "@mui/material";

// representing a possible choice for user
const Choice = ({answerChoice, isCorrect}) => {
    // used to show the background color of the choice
    const [color, setColor] = useState("white");
    
    // used to show if answer choice is correct
    const showCorrectness = () => {
        if (isCorrect) {
            setColor("green");
        } else {
            setColor("red");
        }
    };
    
    return (
        <div className="flex-container" style={{backgroundColor: color}}>
            <Button variant="contained" onClick={showCorrectness}>
                <Typography variant="body2">
                    {answerChoice}
                </Typography>
            </Button>
        </div>
    );
};

export default Choice;