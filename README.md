Student Name: Michael Coca-Vargas

Student G-number: G01272038

Render Deployment URL: https://michael-coca-vargas-swe432-hw4.onrender.com

Description of your Web App, and 5 React Components:
Quiz App that has three questions and will show users when they click the correct or incorrect answer. Users start at start button
to start quiz, then can go back and forth between all the questions. Once the user is done they will submit and see the finishing screen.

Components:
Choice Component represents a choice for a question on the quiz, when clicked will change colors to indicate if correct.
Answer Choices Component represent all the possible choices for a question the quiz.
Prompt Component represents the question prompt for a single prompt.
Question Component represents the prompt and displays the all the answer choices.
Quiz Component represents all the questions on the quiz that can be changed by the next and prev buttons as well as displaying the
question the user is on.

Please indicate whether you completed the Extra Credit
No

React Grading Criteria
App has at least 5 React Components - 1 point each (5 points total)
    Answer Choices, Change Question, Choice, Prompt, Question, Quiz, etc.

Conditional Rendering is used - 4 points
    has Started state used to conditionally render quiz.

At least 5 event handlers are used - 1 point each (5 points total)
    Components with onClick handlers: 
        Change Question, 2 
        Choice, 1
        Start Quiz, 1
        Sumbit Quiz, 1

2 Controlled Components are used - 2 points each (4 points total)
    Change Question component controls the question Number state which changes the question displayed in the quiz.
    Choice component default color state is white then color changes based on if user clicks choice then if it is correct or incorrect.
    
List containing child elements with unique keys is used - 4 points
    Answer Choice component contains ordered list of choice components with unique keys

Total: 22 points

CSS Grading Criteria
One Cascading selector overrides another - 2 points
    List cascading selector class overides OL class to get rid of padding-inline-start and set to 0.

Two pseudo-classes are used - 2 points each (4 points total)
    Hover pseudo class with anchor element button used on the start button.
    Focus pseudo class with anchor element button used on the start button.

One element is centered inside a container - 2 point
    Button centered inside start quiz comoponent using flex.

Z index is used to display a component stacked on top of another - 2 point
    Finished Quiz component stacks on top of Quiz element when submit button is clicked.

One animation using a transition - 4 points
    Animation used on button elements which are only used on the start button to start the quiz.

Use at least one fixed-size component and one relative-size component - 1 point each (2 points total)
    Start Quiz component is a relative size component.
    Quiz component is a fixed size component.

Display Grid with multiple rows and columns is used- 2 points
    Finished Quiz uses grid to display two rows with the bottom row having 3 columns.

Total: 18 points
