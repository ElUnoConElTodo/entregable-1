import { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox'
import db from "./db/quotes.json"

const arrayColors = [
  "#570f0f",
  "#570f3b",
  "#130d51",
  "#380d51",
  "#0d2551",
  "#0d4e51",
  "#985d00",
  "#467511",
  "#5c7200",
  "#000000",
  "#420d0d",
  "#42240d",
  "#685507",
  "#344b05",
  "#154b05",
  "#054b1e",
  "#054b47",
  "#05384b",
  "#00748c",
  "#2a054b"]

const getRandom = (arrayElements) => {
  const quantityValues = arrayElements.length
  const randomIndex = Math.floor(Math.random() * quantityValues)
  return arrayElements[randomIndex]
};

function App() {

  const [quote, setQuote] = useState(getRandom(db));

  const [color, setColor] = useState(getRandom(arrayColors))

  const newQuote = () => {
    setQuote(getRandom(db))
    setColor(getRandom(arrayColors))
    }
  console.log(getRandom(db))
  return (
    <div className="App" style={{backgroundColor: color,}}>
    <QuoteBox 
    quote={quote} 
    newQuote={newQuote}
    color={color}
    />
    </div>
  )
}

export default App
