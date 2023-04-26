[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/aqdPCSr-)
# SWE-432 HW-4 Starter Application

## Submission Information

### Student Information

*Please fill in this information before submission*

* **Student Name:** Michael Coca-Vargas
* **Student G-Number:** G01272038
* **Render Deployment URL:** https://michael-coca-vargas-swe432-hw4.onrender.com

### Documentation of your Web App and React Components

*Here please describe your (at least) 5 different React components as well as the overall purpose of your web application. We provide an example below of what we expect this documentation to look like.*

**General App Description:** Quiz App that has three questions and will show users when they click the correct or incorrect answer. Users start at start button
to start quiz, then can go back and forth between all the questions. Once the user is done they will submit and see the finishing screen.

* **Start Quiz Component:**
  * *Functionality:* Start screen for quiz, displays button for user to click to start the quiz.
  * *Interactivity:* Once button is clicked render the quiz.

* **Choice Component:** 
  * *Functionality:* Choice for a question on the quiz, displays a button with text inside representing a choice on the quiz.
  * *Interactivity:* The user can click on the choice, it will change colors to indicate if correct.

* **Submit Quiz Component:** 
  * *Functionality:* Displays one question at a time with the question prompt at the top, the answer choices underneath, and change question buttons at the button, along with the submit button.

* **Change Question Component:**
  * *Functionality:* Displays two buttons inside a div, to change the question on the quiz.
  * *Interactivity:* The user can click on the previous button to go the previous question, click on the next button to go to the next question.

* **Submit Quiz Component:** 
  * *Functionality:* Displays submit button to show ending screen of quiz.
  * *Interactivity:* Once button is clicked render the ending screen.

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
