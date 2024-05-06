import { useState } from "react";

export default function CreateQuiz({goBack, addNewUser, addQuiz}) {
    const [userName, setUserName] = useState('');
    const [quizid, setQuizid] = useState('');
    const [quespaper, setQuespaper] = useState(0);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    function submit() {
      addNewUser(userName);
      setUserName('');
      setQuespaper(1);
    }
  
    function addQuestion() {
      addQuiz(quizid, question, answer);
      setQuestion('');
      setAnswer('');
    }
  
    return (
      <>
        {quespaper === 0 && (
          <div className='bg bg-slate-300 h-screen flex justify-center items-center flex-col gap-3'>
            <div className="text-8xl font-sans font-bold text-stone-700">Create your own quiz</div>
            <hr />
            <br />
            <br />
            <div className="text-xl font-bold font-sans">Enter your Name: <input className='border rounded border-5 px-1 border-slate-500' type="text" placeholder='name-here' value={userName} onChange={(e) => setUserName(e.target.value)} /></div>
            <hr />
            <div className="text-xl font-bold font-sans">Enter quiz code: <input className='border rounded border-5 px-1 border-slate-500' type="text" placeholder='quizid-here' value={quizid} onChange={(e) => setQuizid(e.target.value)} /></div>
            <br />
            <div>
              <button onClick={submit} className='bg-slate-400  rounded border-black p-2 m-4'>Submit</button>
              <button onClick={goBack} className='bg-slate-400 rounded p-2 '>Move to home</button>
            </div>
          </div>
        )}
        {quespaper === 1 && (
          <div className='bg-slate-300 h-screen flex justify-center flex-col font-bold p-20'>
            <div className="flex justify-center items-center text-7xl font-sans font-bold text-stone-700">Add your question answer pairs</div>
            <br />
            <br />
            <br />
            <br />
            <div className="flex items-center justify-center gap-2 text-xl font-bold font-sans">Enter question: <input placeholder='Enter the question here' className='p-2 border border-black h-20 w-screen' value={question} type="text" onChange={(e)=>setQuestion(e.target.value)} /></div>
            <br />
            <br />
            <div className="flex items-center justify-center gap-2 text-xl font-bold font-sans">Enter correct ans: <input placeholder='Enter the answer here' className='p-2 border border-black h-20 w-screen' value={answer} type="text" onChange={(e)=>setAnswer(e.target.value)} /></div>
            <br />
            <br />
            <div className="flex gap-5 justify-center">
              <button onClick={addQuestion} className='bg-slate-400 rounded p-2'>Add this Question/Answer pair</button>
              <button onClick={goBack} className='bg-slate-400 rounded p-2'>Save and Move to home</button>
            </div>
            
          </div>
        )}
        
      </>
    )
  }''