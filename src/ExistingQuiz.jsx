import { useEffect, useState } from "react";

export default function ExistingQuiz({goBack, users, quizes}) {
    const [quizid, setQuizid] = useState('');
    const [showQuiz, setShowQuiz] = useState(0);
    const [submit, setSubmit] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [currentAns, setCurrentAns] = useState('');
    const [score, setScore] = useState(0);

    const timeForEachQues = 10000;

    function handleSubmit() {
      if(currentIndex===quizes[quizid].questions.length-1) {
        setSubmit(1);
        setShowQuiz(2);
      }
      else {
        setSubmit(1);
      }
    }

    useEffect(()=>{
      if(submit===1) {
          setAnswers([...answers, currentAns]);
          if(currentAns===quizes[quizid].answers[currentIndex])
            setScore(score+1);
          setCurrentAns('');
          console.log("moving to the next question");
          if(currentIndex<quizes[quizid].questions.length-1){
              console.log("value of current index has been increased");
              setCurrentIndex(currentIndex+1);
          }
          setSubmit(0);
      }
    }, [submit])

    useEffect(()=> { 
      let tempIndex = currentIndex;
      const timeoutId = setTimeout(()=>{
        if(currentIndex===tempIndex && currentIndex<quizes[quizid].questions.length-1) {
          setAnswers([...answers, '']);
          setCurrentIndex(currentIndex+1);
          setCurrentAns('');
          console.log("currentIndex:"+currentIndex + " tempIndex: "+tempIndex);
        }
      }, timeForEachQues);
      return () => {
        clearTimeout(timeoutId);
      };
    }, [currentIndex, showQuiz])

    return (
      <>
        <div className='bg-slate-300 h-screen flex flex-col justify-center items-center gap-5'>
          <div className="text-8xl font-sans font-bold text-stone-700">{showQuiz==0?(<div>Enter the creds</div>):(<div>All the best</div>)}</div>
          <br />
          <br />
          <br />
          {showQuiz===0 && (
            <>
              <div className="font-bold font-sans text-2xl">Enter the quiz id: <input value={quizid} onChange={(e)=>setQuizid(e.target.value)} placeholder='quizid here' className='border p-2 m-2' type="text" /></div>
              <div>
                <button onClick={()=>setShowQuiz(1)} className='bg-slate-400 p-2 m-2 rounded'>Open my quiz</button>
                <button className='bg-slate-400 p-2 m-2 rounded' onClick={goBack}>Move to home</button>
              </div>
              <br />
            </>
          )}
          {showQuiz===1 && 
            (
              <>
                <div className="flex gap-3 flex-col items-center justify-center">
                    <div className="text-xl font-bold font-sans">Question {currentIndex}: {quizes[quizid].questions[currentIndex]}</div>
                    
                    <input value={currentAns} onChange={(e)=>setCurrentAns(e.target.value)} type="text" placeholder="Enter your answer here" className="border p-2 m-2 rounded" />
                    <button className="bg-slate-400 p-2 m-2 rounded" onClick={handleSubmit}>
                        {currentIndex!==quizes[quizid].questions.length-1?(<div>Submit and move to next question</div>):(<div>Final Submit</div>)}
                    </button>
                </div>
                <br />
              </>
            )
          }
          {showQuiz===2 && 
            (
              <>
                <div className="text-3xl font-bold font-sans">Your Score: {score}</div>
              </>
            )
          }
        </div>
      </>
    )
  }