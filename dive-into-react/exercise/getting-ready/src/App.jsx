import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Actor from './Actor'
import People from './People'
import Animal from './Animal'
import Counter from './Counter'
import Users from './Users'

function App() {
  let actors = ["Rahim", "Karim", "Akib", "Arong", "Naeem", "Fahad", "Arafat"]
  let peoples = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];
  let animals = ["Elephant", "Cat", "Cow", "Pork", "Bird"]
  let count = 0
  return (
    <>
      <Users></Users>
      ---
      <Counter></Counter>

      {/*       <Students name="Sams" age={23} ></Students>
      {
        peoples.map(people => {
          return <People pupil={people}></People>
        })
      }
      {
        actors.map(actor => {
          return <Actor name={actor} ></Actor>
        })
      } */}

    </>
  )
}


function Students(props) {
  console.log("props", props)
  return <>
    <div>
      <span>Name: {props.name} </span>
      <span>Age: {props.age}</span>
    </div>
  </>
}

export default App
