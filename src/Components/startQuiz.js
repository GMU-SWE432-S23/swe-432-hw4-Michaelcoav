import { Card, CardContent } from "@mui/material";

// representing button that will render the quiz once it is clicked
const StartQuiz = ({hasStarted, setHasStarted}) => {
    const startQuiz = () => {
        setHasStarted(!hasStarted);
    };

    return (
        <Card className="start-quiz">
            <CardContent className="flex-container" variant="outlined">
                <button onClick={startQuiz}>
                    Start
                </button>
            </CardContent>
        </Card>
    )
};

export default StartQuiz;