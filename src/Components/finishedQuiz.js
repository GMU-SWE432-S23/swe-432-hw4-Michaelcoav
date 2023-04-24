import { Celebration, Done, SentimentSatisfied } from "@mui/icons-material";
import { Typography } from "@mui/material";

// ending screen that uses grid, as well as z-index to appear on top of quiz
const FinishedQuiz = () => {
    return (
        <div className="finished-quiz quiz-grid center-text">
            <div className="quiz-header">
                <Typography variant="h2">
                    Done!
                </Typography>
            </div>

            <div>
                <Celebration sx={{fontSize: "3em"}}/>
            </div>

            <div>
                <Done sx={{fontSize: "3em"}}/>
            </div>
            
            <div>
                <SentimentSatisfied sx={{fontSize: "3em"}}/>
            </div>
        </div>
    );
};

export default FinishedQuiz;