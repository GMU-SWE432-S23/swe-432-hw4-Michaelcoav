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