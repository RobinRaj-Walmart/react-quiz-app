import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ExistingQuiz from './ExistingQuiz';
import CreateQuiz from './CreateQuiz';
import Home from './Home';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/create' element={<CreateQuiz />} />
        <Route path='/existing' element={<ExistingQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;
