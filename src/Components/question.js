const Question = ({prompt, answerChoices}) => {
    return (
        <div className="flex-container">
            <div>
                {prompt}
                <br />
                {answerChoices}
            </div>
        </div>
    );
};

export default Question;