import { useEffect, useState } from "react";
export default function ExistingQuiz({goBack, users, quizes}) {
    const [quizid, setQuizid] = useState('');
    const [showQuiz, setShowQuiz] = useState(0);
    const [submit, setSubmit] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const timeForEachQues = 10000;

    useEffect(()=>{
        if(submit===1) {
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
          setCurrentIndex(currentIndex+1);
          console.log("currentIndex:"+currentIndex + " tempIndex: "+tempIndex);
        }
      }, timeForEachQues);
      return () => {
        clearTimeout(timeoutId);
      };
    }, [currentIndex, showQuiz])

    return (
      <>
        <div className='h-screen flex flex-col justify-center items-center'>
          <div>Enter the quiz id: <input value={quizid} onChange={(e)=>setQuizid(e.target.value)} placeholder='quizid here' className='border p-2 m-2' type="text" /> </div>
          <button onClick={()=>setShowQuiz(1)} className='border border-black p-2 m-2'>Open my quiz</button>
          <button className='border' onClick={goBack}>Move to home</button>
          <br />
          {showQuiz && 
            (
              <>
                  <div className="flex gap-3 items-center justify-center">
                      <div>{quizes[quizid].questions[currentIndex]}</div>
                      <input type="text" placeholder="Enter your answer here" className="border" />
                      <button className="border" onClick={()=>setSubmit(1)}>
                          {currentIndex!==quizes[quizid].questions.length-1?(<div>Submit and move to next question</div>):(<div>Final Submit</div>)}
                      </button>
                  </div>
                  <br />
              </>
            )
          }
        </div>
      </>
    )
  }