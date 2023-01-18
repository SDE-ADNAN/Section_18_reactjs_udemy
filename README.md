## 225. Module Introduction

What we will learn in this section??

1. What is redux and why should we use redux for our state management.
2. Redux basics and how will we use redux in react.
3. also we will learn about redux toolkit which is a better option for redux.

---

---

## 226. Another Look At State In React Apps

### Q: What is redux?

A: Redux is a state-management-system for cross-component or app-wide state .

### Q: What is Cross-component / App-wide state ?

A: Look state could be of three types

1. Local state.-->
   1. State that belongs to a single component.
   2. E.g. Listening to user input in an input feild; toggling a "show-more" details feild.
   3. Should be manageed inside of a component using useState() / useReducer()
2. Cross-component State.-->
   1. State that affects multiple components.
   2. E.g. open/ close the state of a modal overlay.
   3. Requires "prop chains" / "prop drilling" OR (reactcontext or reducer)
3. App-wide state.-->
   1. State that affects the entire app (most / all components).
   2. E.g. user authentecation status.
   3. Requires "prop chains" / "prop drilling" OR (reactcontext or reducer)

---

---

## 227. Redux vs React Context

### React context - potential disadvantages:

1. Complex Setup/ Management. (code below like this may be a result of using many react-context-providers in single app )

```js
return (
  <AuthContextProvider>
    <ThemeContextProvider>
      <UIInteractionContextProvider>
        <MultiStepFormContextProvider>
          <UserRegistration />
        </MultiStepFormContextProvider>
      </UIInteractionContextProvider>
    </ThemeContextProvider>
  </AuthContextProvider>
);
```

to avoid this you can have a large context provider with all the required state , but that could lead to a huge file with too much state to handle and may become confusing.
like this.

```js
function AllContextProvider(){
    const [isAuth,setIsAuth] = useState(false);
    const [isEvaluatingAuth,setIsEvaluatingAuth] = useState(false);
    const [activeTheme,setActiveTheme] = useState('default');
    const [...] = useState(...);

    function loginHandler(email,password){ ... };
    function signupHandler(email,password){ ... };
    function changeThemeHandler(newTheme){ ... };
...
return(
    <AllContext.Provider>
    {...}
    </AllContext.Provider>
)
}
```

2. Next problem is the performance :<br>
   <br>
   for the performance issue a react development team member "sebmarkbage" raised an issue that states:<br>
   <br>
   ""My personal summary is that new context is ready to be used for low frequency unlikely updates (like locale/theme). It's also good to use it in the same way as old context was used. I.e. for static values and then propagate updates through subscriptions. It's not ready to be used as a replacement for all Flux-like state propagation.""
   <br>
   therefore for enterprise level applications like HealthKart we cannot use ReactContext as it lags when high frequency changes occur.

Conclusion:

1. In more complex apps, managing React Context can lead to deeply nested JSX code and / or huge "Context Provider" Components.
2. React Context is not optimized for high frequency state changes.
