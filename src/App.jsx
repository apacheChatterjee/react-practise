import { useState } from 'react'
import './App.css'
import User, {NamedComponent, UserKey} from './User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>Get started D DADA!</h1>
          {/* This is <User/> component from user.jsx used as div or element here. Must starts with Capital Letter-> to tell React that its a component.*/}
          <User/>
          <NamedComponent/>
          <h4>{UserKey}</h4>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  )
}

export default App
