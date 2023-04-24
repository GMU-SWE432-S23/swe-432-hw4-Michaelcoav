import { Button, Typography } from "@mui/material";

// representing button that will render the ending screen
const SubmitQuiz = ({isDone, setIsDone}) => {
    // once the submit button is clicked set is done to true
    const submitQuiz = () => {
        setIsDone(!isDone)
    }
    
    return (
        <div className="flex-container">
            <Button variant="contained" onClick={submitQuiz}>
                <Typography variant="body2">
                    Submit
                </Typography>
            </Button>
        </div>
    );
}

export default SubmitQuiz;