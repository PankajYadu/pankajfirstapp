//  import React, {useState} from 'react';
//  import axios from "axios";
//  import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
// import './App.css';
// import Footer from './components/Footer/Footer';
// import Header from './components/Header';
// import Home from './Pages/Home/Home';
// import Quiz from './Pages/Quiz/Quiz';
// import Result from './Pages/Result/Result';

// function App() {
//   const[name,setName]=useState();
//   const [questions, setQuestions] = useState();
//   const [score, setScore] = useState(0);
//   const fetchQuestions=async(category="",difficulty="")=>{
//     // const{data}= await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty&& `&difficulty=${difficulty}`}&type=multiple`);
//     const{data}=await axios.get(`https://opentdb.com/api.php?amount=10${ category && `&category=${category}` }${difficulty && `&difficulty=${difficulty}`}&type=multiple`);

//     console.log(data);
//       // setQuestions(data.results);
//   }

//   return (
//     <Router>

//     <div className="App" style={{background:"url(./ques1.png)"}}>
//     <Header/>
//     <Switch>
//       <Route path="/" exact>
//         <Home name={name} 
//         setName={setName}
//         fetchQuestions={fetchQuestions}/>
//         </Route>
//         <Route path="/quiz" exact>
//           <Quiz
//           name={name}
//           questions={questions}
//           score={score}
//           setScore={setScore}
//           setQuestions={setQuestions}/>
//         </Route>
//         <Route path="/result" exact>
//           <Result/>

//         </Route>
//     </Switch>
//      </div>
//     <Footer/>

//     </Router>
//   )
// }

// export default App;

import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path="/quiz">
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route path="/result">
            <Result name={name} score={score} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
