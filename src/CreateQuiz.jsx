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
          <div className='h-screen flex justify-center items-center flex-col'>
            Enter your Name: <input className='border rounded border-5 px-1 border-slate-500' type="text" placeholder='name-here' value={userName} onChange={(e) => setUserName(e.target.value)} />
            Enter quiz code: <input className='border rounded border-5 px-1 border-slate-500' type="text" placeholder='quizid-here' value={quizid} onChange={(e) => setQuizid(e.target.value)} />
            <button onClick={submit} className='border border-black p-2 m-4'>Submit</button>
            <br/>
            <button onClick={goBack} className='border'>Move to home</button>
          </div>
        )}
        {quespaper === 1 && (
          <div className='h-screen flex justify-center flex-col font-bold'>
            Enter question: <input placeholder='Enter the question here' className='p-2 border border-black h-20' value={question} type="text" onChange={(e)=>setQuestion(e.target.value)} />
            <br />
            <br />
            Enter correct ans: <input placeholder='Enter the answer here' className='p-2 border border-black h-20' value={answer} type="text" onChange={(e)=>setAnswer(e.target.value)} />
            <br />
            <br />
            <button onClick={addQuestion} className='rounded border border-black p-2 m-2 bg-slate-300'>Add this Question/Answer pair</button>
            <br/>
            <button onClick={goBack} className='border'>Save and Move to home</button>
          </div>
        )}
        
      </>
    )
  }