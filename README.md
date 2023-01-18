## 225. Module Introduction

What we will learn in this section??

1. What is redux and why should we use redux for our state management.
2. Redux basics and how will we use redux in react.
3. also we will learn about redux toolkit which is a better option for redux.

## 226. Another Look At State In React Apps

Q: What is redux?
A: Redux is a state-management-system for cross-component or app-wide state .

Q: What is Cross-component / App-wide state ?
A: Look state could be of three types 
    1. Local state.--> 
        1. State that belongs to a single component. 
        2. E.g. Listening to user input in an input feild; toggling a "show-more" details feild.
        3. Should be manageed inside of a component using useState() / useReducer()
    2. Cross-component State.-->
        1. State that affects multiple components.
        2. E.g. open/ close the state of a modal overlay.
        3. Requires "prop chains" / "prop drilling"
    3. App-wide state.-->
        1. 