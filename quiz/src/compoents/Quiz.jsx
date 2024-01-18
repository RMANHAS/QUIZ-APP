import React, { useState } from 'react'
import quizData from '../Data/quizData'
import Quizresult from './Quizresult';

function Quiz() {
  const [currentQuestion,setCurrentQuestion]=useState(0);
  const [score,setscore]=useState(0);
  const [clickedoption,setclickedoption]=useState(0);
  const [showResult,setShowResult]=useState(false)

  const changeQuestion=()=>{
    updateScore();
    if(currentQuestion<quizData.length-1){
      setCurrentQuestion(currentQuestion+1);
      setclickedoption(0);
    }else {
      setShowResult(true)
    }
  }
  const updateScore=()=>{
    if(clickedoption===quizData[currentQuestion].answer){
      setscore(score+1)
    }
  }
  const resetAll=()=>{
    setShowResult(false);
    setCurrentQuestion(0);
    setclickedoption(0);
    setscore(0);
  }
  return (
    <div>
      <p className="heading-txt">Quiz App</p>
      <div className="container"> 
      {showResult ? (
        <Quizresult score={score} totalScore={quizData.length}  tryAgain={resetAll}/>
      ):(<>
      <div className="question">
        <span id='question-number'>{currentQuestion+1}</span>
        <span id='question-text'>{quizData[currentQuestion].question}</span>
      </div>
<div className="option-container">
{quizData[currentQuestion].options.map((option,i)=>{
  return(
    <button 
    //className="option-btn"
    
      className={`option-btn ${
        clickedoption===i+1?"checked":null
    }`}
    key={i}
    onClick={()=>setclickedoption(i+1)}>
     
      {option}
    </button>
  )
})}

</div>
<input type="button" value="NEXT" id='next-button' onClick={changeQuestion} />
</>)}
      </div>
    </div>
  )
}

export default Quiz