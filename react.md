# ASSESSMENT 4: REACT ASSESSMENT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1a. Indicate which of the following statements about React are false:

- React is a modern, efficient answer to complex UI applications
- React will only render on the server using Node.js 
- FALSE
- React is a full stack framework for modern web applications
- React is a flexible library that plays the role of V in an MVC framework
- You should always update a component's state directly using this.state
- FALSE
- React is made up of encapsulated components that manage their own state
- React components render HTML

1b. Add an interesting true fact about React to the list.
React is taking over front-end development
2. What are "smart" and "dumb" components? Explain the difference and also add why we bother to make the distinction between them.
smart:  Will house the functions and methods that are passed down to the children
dumb: Will render the smart components
  Your answer:

  Researched answer:
smart: Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.
dumb:Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it.

3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

  Your answer: Yarn allows us to view react in real time on the web.

  Researched answer:
Yarn installs packages in your dependencies.


4. How would you explain state to a friend who doesn't know code?

  Your answer:
State is like the start point of a compentent, essentially it's a starting point that you can assign a value to.
  Researched answer:
The heart of every React component is its “state”, an object that determines how that component renders & behaves. In other words, “state” is what allows you to create components that are dynamic and interactive. 


5. What is the difference between component state and props? Your answer should include a short explanation of both.

  Your answer:State will be loacted in the smart component and not in the dumb components.  props is like a place holder to pass on state to a dumb component.

  Researched answer:Props and state are related. The state of one component will often become the props of a child component. Props are passed to the child within the render method of the parent as the second argument to React.createElement() or, if you're using JSX, the more familiar tag attributes.
