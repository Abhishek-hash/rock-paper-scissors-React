import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [youSelect, setYouSelect] = useState("Select One")
  const [compSelect, setCompSelect] = useState("Comp Select")
  const [result, setResult] = useState("Play First!")

  const [yourScore, setYourScore] = useState(0)
  const [compScore, setCompScore] = useState(0)

  const handleClick = (e) => {
    console.log("you choosed:", e.target.textContent)
    setYouSelect(e.target.textContent)
    const options = ["Rock", "Paper", "Scissors"]

    let randNUm = Math.floor(Math.random() * 3);
    console.log("Computer choosed:",options[randNUm])
    //console.log("random number from 0 to 2:", randNUm)
    setCompSelect(options[randNUm])
    console.log(youSelect === compSelect)
    setResult("lets wait...")
    console.log('Your score:', yourScore)
    console.log('Comp score:', compScore) 
  }

  const handleReset = () => {
    setYourScore(0);
    setCompScore(0);
  }

  useEffect(() => {
    if (youSelect === compSelect) setResult('Draw')
    else if (youSelect === 'Rock' && compSelect === 'Paper') {
      setResult('Computer Wins!')
      //setCompScore(compScore+1)
  } 
    else if (youSelect === 'Paper' && compSelect === 'Rock') {
      setResult('You Wins!')
      //setYourScore(yourScore+1)
    }
    else if (youSelect === 'Scissors' && compSelect === 'Paper') {
      setResult('You Wins!')
      //setYourScore(yourScore+1)
    }
    else if (youSelect === 'Paper' && compSelect === 'Scissors') {
      setResult('Computer Wins!')
      //setCompScore(compScore+1)
    }
    else if (youSelect === 'Rock' && compSelect === 'Scissors') {
      setResult('You Wins!')
      //setYourScore(yourScore+1)
    }
    else if (youSelect === 'Scissors' && compSelect === 'Rock') {
      setResult('Computer Wins!')
      //setCompScore(compScore+1)
    }
    console.log('result:', result)
    if(result === 'You Wins!') setYourScore(yourScore+1)
    else if(result === 'Computer Wins!') setCompScore(compScore+1)
    else {
      setYourScore(yourScore)
      setCompScore(compScore)
    }
    console.log('Your score in useEffect:', yourScore)
    console.log('Comp score in useEffect:', compScore) 
   }, [result])
 
  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <div className='container'>

        <div className='you'>
          <p className='players'>You</p>
          <p>Your Score: {yourScore}</p>
          <p>Your Choice: {youSelect}</p>
        </div>

        {/*<div className='line'></div>*/}

        <div className='computer'>
          <p className='players'>Computer</p>
          <p>Computer Score: {compScore}</p>
          <p>Computer Choice: {compSelect}</p>
        </div>

      </div>
      <div className='footer'>
        <div className='you-select'>
          <p style={{fontWeight:'bold', fontSize:'20px'}}>You select: </p>
        </div>
        <div className='options'>
          <span onClick={(e) => handleClick(e)} className='select'>Rock</span>
          <span onClick={(e) => handleClick(e)} className='select'>Paper</span>
          <span onClick={(e) => handleClick(e)} className='select'>Scissors</span>
        </div>
      </div>
      <div>
        <p style={{fontWeight:'bold', fontSize:'20px'}}>Result: {result}</p>
      </div>
      <div>
        <button style={{fontWeight:'bold', fontSize:'15px', backgroundColor:'palegreen', border:'1px solid', borderRadius:'10px', padding:'5px', cursor:'pointer'}}
        onClick={handleReset}
        >Reset Game</button>
      </div>
    </div>
  );
}

export default App;
