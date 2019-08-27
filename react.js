// ASSESSMENT 4: REACT ASSESSMENT
// Coding practical questions

// NOTE: In this assessment you will NOT be running a react file structure

// 1. Write a React component that prints "I am a component!" Be sure to include all necessary imports, exports, etc...
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Link from './app1'

class App extends Component {
    render(){
  return (
    <div>
    <Link />
    </div>


  );
// }below is what is being called to render above
}
export default App;

import React, {Component} from 'react'

export default class Link extends Component {
    constructor(props){
        super(props)
        this.state = {
            str1: "I am a component!"
        }
    }

render(){
    const {str1} = this.state
    return(

        <div>
        <h1>{str1}</h1>
        </div>

    )
}
}




// 2. Refactor this vanilla javascript loop to a map function. The output should remain the same. 

var names = ["Ford Prefect", "Arthur Dent", "Trillian", "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

for(let i=0; i<names.length; i++){
  console.log(`${names[i]} is ${names[i].length} characters long.`)
}

loop = (name)=>{
    let sameArr = name.map(words => words)
    return sameArr
}
console.log(loop(names));


// 3. Destructure the following variables out of state:

this.state = {
  name: "Dracula",
  home: "Transylvania",
  dislikes: ["mirrors", "garlic", "wooden stakes"]
}

const {name,home, dislikes} =this.state

// 4. Write a React method that would add one to the count and update the state.

this.state = {
  count: 0
}
// #######
import React, {Component} from 'react'

export default class Link extends Component {
    constructor(props){
        super(props)
        this.state = {
            str1: "I am a component!",
            count: 0
        }
    }


addOne = () =>{
    console.log('hello');

    const {count} = this.state
    let final = 1 + count
    this.setState({count:final})
    console.log(this.state.count);
    console.log('hi')
}

render(){
    const {str1,count} = this.state
    return(

        <div><button onClick= {this.addOne}>{count}</button>

        <h1>{str1}</h1>
        </div>

    )
}
}



// 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

import React, { Component } from 'react';

class Recipes {
  constructor(props){
    super(props)
    this.state = {
      recipes:
        {name: 'Meatballs'},
        {name: 'Mac & Cheese'}
    }
  }

  render() {
    return(
      let recipes = recipes.map(recipe => {
        return(
          <li key={recipe.name}>{recipe.name}</li>
        )
      })
      <ul>
        {recipes}
      </ul>
    )
  }
}
// ##### 5 solved
import React, { Component } from 'react';

class Recipes extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: [
        {name: 'Meatballs'},
        {name: 'Mac & Cheese'}
        ]
      }
    }


    render() {
        let recipez = this.state.recipes
          let recipes = recipez.map(recipe => {
              return <li key={recipe.name}>{recipe.name}</li>

          })
       return(

         <ul>
           {recipes}
         </ul>
       )
     }
   }

   export default Recipes

export default Recipes
