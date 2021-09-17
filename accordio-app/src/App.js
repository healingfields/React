import logo from './logo.svg';
import './App.css';
import Data from './Data';
import { useState } from 'react';
import questions from './Data';
import Question from './Question';

function App() {
  const [question, setQuestions] = useState(Data);
  return (
    <main>
      <div className='container'>
        <h1>questions and answers about login</h1>
      </div>
      <section>
        {questions.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </section>
    </main>
  );
}

export default App;
