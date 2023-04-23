import { Typography } from "@mui/material";

const Prompt = ({questionPrompt}) => {
    return (
        <div>
            <Typography variant="h4" sx={{textAlign: "center"}}>
                {questionPrompt}
            </Typography>
        </div>
    )
};

export default Prompt;