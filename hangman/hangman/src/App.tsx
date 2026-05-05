import { useState } from 'react'
import words from "./wordList.json"
import { HangmanDrawing } from './Components/HangmanDrawing'
import { Keyboard } from './Components/Keyboard'
import { HangmanWord } from './Components/HangmanWord'


function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
    console.log(wordToGuess)
   return (
   <div
    style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"
   }} 
    >
      <div style={{ fontSize: "2rem", textAlign: "center"}}>
        Lose
        Win
      </div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
   </div>
  )
}

export default App
