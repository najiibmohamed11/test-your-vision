import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import coffeeImage from './assets/CNPS2758.png'

function Hassan() {
  const [saxday, setSaxday] = useState(0)
  const [qaladay, setQaladay] = useState(0)
  const [ischanged, setIschanged] = useState(false)
  const [randomTop, setRandomTop] = useState(0)
  const [randomLeft, setRandomLeft] = useState(0)

  useEffect(() => {
    // generate random values for top and left CSS properties
    const newTop = Math.floor(Math.random() * 500) // adjust maximum value based on your layout
    const newLeft = Math.floor(Math.random() * 500) // adjust maximum value based on your layout

    // update state variables with new random values
    setRandomTop(newTop)
    setRandomLeft(newLeft)
  }, [ischanged])

  function handleYouGet() {
    alert('Yes, you got it!')
    setSaxday(saxday +1)
    setIschanged(!ischanged)

  }
  function Handlewrong(){
    alert('You got wrong')
    setQaladay(qaladay+1)


  }

  const imgStyle = {
    position: 'absolute',
    top: randomTop,
    left: randomLeft,
  }

  return (
    <div className="app">
      <div className="resualt">
        <button className='p1'>saxday:  {saxday}</button>
        <button className='p2'>qaladay:  {qaladay}</button>
      </div>
      <div className="fixedpostion">
        <img
          onClick={handleYouGet}
          src={coffeeImage}
          className="hassan shiiq"
          style={imgStyle} 
          alt="coffee beans"
        />
        <img
          onClick={Handlewrong}
          src="https://img.freepik.com/free-photo/coffee-beans-closeup-background_1232-2002.jpg?w=826&t=st=1683209547~exp=1683210147~hmac=b0a3975319e621d8fedc89ddbfa8d45ffd4134c1ed7aa72bff090c287b20284c"
          className="coffee"
          alt="coffee beans background"
        />
      </div>
    </div>
  )
}

export default Hassan
