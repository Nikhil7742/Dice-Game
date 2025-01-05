import NumberBox from './numberSection'
import DiceBox from './diceSection'
import { useState } from 'react'

export default function Game () {
  const [randomNumber, setRandomNumber] = useState(1)
  const [number, setNumber] = useState(0)
  const [score, setScore] = useState(0)
  const [error, setError] = useState('')

  const systemNumber = (min, max) => {
    // Generate a random number between min and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const numberPut = () => {
    if (!number) {
      setError('You have not selected a number.')
      return
    }
    setError('')

    const generatedNumber = systemNumber(1, 6) // Roll the dice (1-6)
    setRandomNumber(generatedNumber)

    if (number === generatedNumber) {
      setScore(prev => prev + number)
    } else {
      setScore(prev => prev - 2)
    }

    setNumber(0) // Reset number to its default value
  }

  return (
    <>
      <NumberBox
        number={number}
        setNumber={setNumber}
        score={score}
        error={error}
      />
      <DiceBox
        randomNumber={randomNumber}
        numberPut={numberPut}
        setScore={setScore}
      />
    </>
  )
}
