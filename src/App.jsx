import { useState } from 'react'
import './App.css'
import User, {NamedComponent, UserKey} from './User'
import Counter from './Counter'

function App() {
  let name = 'Madhumita'
  const userObj = {
      name:"Satya",
      id:123,
      email:"satya123@gmail.com",
      phone:"2345437869"
      }
  const userArray = ['Harry','Potter','Julius','Cesar']
  const [fruit, setFruit]=useState("Apple");
  const handleFruit = ()=>{
    setFruit("It is changed to Banana")
      }
  function display(a,b){
      return a+b
            }

  return (
    <>
        <div>
            <h1>Use of Curly braces in JSX</h1>
            <h2>Name in the variable : {name}</h2>
            <h2>Condition applied- {name ? name: 'user not found'}</h2>
            <h2>Calling function and operation: {display(10,20)}</h2>
            <h3>Fetching user object- {userObj.name} , {userObj.email}</h3>
            <h3>Array- {userArray[2]}</h3>
        </div>
        <div>
            <h1>State in React.js</h1>
            <h2>{fruit}</h2>
            <button onClick={handleFruit}>Change fruit</button>
            <Counter />
        </div>
    </>
  )
}

export default App
