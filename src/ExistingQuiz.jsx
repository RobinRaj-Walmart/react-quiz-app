export default function ExistingQuiz({goBack, users, quizes}) {
    const [quizid, setQuizid] = useState('');
    const [showQuiz, setShowQuiz] = useState(0);
    return (
      <>
        <div className='h-screen flex flex-col justify-center items-center'>
          <div>Enter the quiz id: <input value={quizid} onChange={(e)=>setQuizid(e.target.value)} placeholder='quizid here' className='border p-2 m-2' type="text" /> </div>
          <button onClick={()=>setShowQuiz(1)} className='border border-black p-2 m-2'>Open my quiz</button>
          <button className='border' onClick={goBack}>Move to home</button>
          {showQuiz && 
          quizes[quizid].questions.map((q, index)=>(
            <div className='flex m-2'>
              <div key={index} className=' m-2'>Question:{q}</div>
              Answer: <input placeholder='enter your ans here' className='border ' />
            </div>
          ))}
        </div>
      </>
    )
  }