import { useState } from "react";
import CreateQuiz from "./CreateQuiz";
import ExistingQuiz from "./ExistingQuiz";

export default function Home() {
    const [users, setUsers] = useState([]);
    const [mode, setMode] = useState(0);
    const [quizes, setQuizes] = useState([]);
  
    function addUser(user) {
      setUsers([...users, user]);
    }
  
    function resetMode() {
      setMode(0);
    }
  
    function addQuiz(quizid, question, answer) {
      if (quizes[quizid]) {
        setQuizes({
          ...quizes,
          [quizid]: {
            ...quizes[quizid],
            questions: [...quizes[quizid].questions, question],
            answers: [...quizes[quizid].answers, answer],
          }
        });
      } else {
        setQuizes({
          ...quizes,
          [quizid]: {
            questions: [question],
            answers: [answer],
          }
        });
      }
      console.log(quizes);
    }
    
  
    return (
      <>
        {mode===0 && (
          
          <div className='flex h-screen flex-col bg-gray-300 justify-center items-center'>
            <div className="text-8xl font-sans font-bold text-stone-700">Quiz App</div>
            <br />
            <br />
            <div>
              <button onClick={()=>setMode(1)} className='p-10 border-8 rounded m-10 bg-cyan-300 font-bold'>
                Create a new Quiz
              </button>
              <button onClick={()=>setMode(2)} className='p-10 border-8 rounded m-10 bg-cyan-300 font-bold'>
                Give an existing quiz
              </button>
            </div>
          </div>
        )}
        {mode===1 && <CreateQuiz goBack={resetMode} addNewUser={addUser} addQuiz={addQuiz} />}
        {mode===2 && <ExistingQuiz goBack={resetMode} users={users} quizes={quizes} />}
      </>
    );
  }
   