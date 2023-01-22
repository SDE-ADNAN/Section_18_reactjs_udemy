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

---

## 228 : How Redux works

1. In redux you have only one data store , here data means state, this central state is accessible by all the components inside the application where ever it is needed.
2. All the components in an application where data is managed by redux share the subscriptio with the store due to which , whenever some data inside the store changes the component which is dependant on that data gets notified and may mutate accordingly.
3. For changing this state which we got from the store , One thing which is most imp to consider is that "components never ever change the redux store state directly".
4. For changing that redux store state we use the conncept of reducers (Reducer functions). This reducer function are responsible for the state mutations in the redux store. Here by saying reducer we dont mean the "useReducer()" hook , instead reducers are a general concept.
5. Reducers generally are functions which take an input and spit out a proccessed output .
6. For letting the store know that component needs to mutate/change a piece of store's state the component dispatches an action to the store for changing the state . And at the end the components receive the updated state .
7. and this dispatching is done through a dispatch function which takes the data to mutate the state and communicates to the store for the demand of changing that particular state.
8. the path of a state update using redux concepts is : components dispatch actions stating that what and how should update --> then this action reaches the reducer function . --> then inside the reducer function the main processing is done --> then lastly the state at the redux store gets updated --> and as a result which ever components are subscribed to this store's state gets the latest state immidiately.

---

---

## 229 : MUST READ: Redux createStore() is (not) deprecated

In the next lectures, you'll learn about Redux and how to use it. As part of these lectures a so-called Redux store will be created with help of a function called <strong style="color:yellow">.createStore()</strong>.

When using that function in your code, you might get a deprecation warning by your IDE or when running the app.

You should ignore this warning!

You can still use <strong style="color:yellow">.createStore()</strong> without issues.

Indeed, the React Redux team now recommends the usage of an extra package called Redux Toolkit and another way of creating the Redux store. That package will indeed be covered a little bit later in the course as well. But by first diving into <strong style="color:yellow">.createStore()</strong> and the next lectures, you'll learn how Redux works and what it does. This is some crucial knowledge that's required no matter if you're then using Redux Toolkit (as mentioned: Covered later as well) or not!

---

---

## 230 : Exploring The Core Redux Concepts.

1. It is not necessary to use redux along with react or any other js library , it could be used singlehandedly as redux is designed to handle data and app state.
2. For installing redux we need to run the below command :

```shell
npm install redux
```

3. Redux has a predefined function "redux.createStore()" which is used to initialize the store that redux manages for us and hence it is the main part of the whole application we generally start with store .
4.
