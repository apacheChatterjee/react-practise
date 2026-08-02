import { useState } from 'react'
import './App.css'
import User, {NamedComponent, UserKey, ToggleUser, UserDetails} from './User'
import Counter from './Counter'

function App() {
  const [displayMsg, setDisplayMsg] = useState(true);
  let message = 'Madhu is present'
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
         <div>
             <h1>Toggle in React.js</h1>
             {
               displayMsg ? <h2>{message}</h2> : <h2>Absent</h2>
             }
             <button onClick={()=> setDisplayMsg(!displayMsg)}>Toggle Message</button>
             <h2>Toggle Component</h2>
             {
                 displayMsg ?  <ToggleUser/> : null //Reused displayMsg for quick results this impacts the above toggle as well.
             }
             <button onClick={()=> setDisplayMsg(!displayMsg)}>Toggle Component</button>
         </div>
         <div>
             <h1>Using Props in React.js</h1>
             <User name={"Madhu-prop"} age={23} />
             <h2>Passing object as prop</h2>
             <UserDetails userObj={userObj}/>

         </div>
    </>
  )
}

export default App
