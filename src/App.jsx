import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [question, setquestion] = useState(" ");
  const [answer, setanswer] = useState("");

async function generateAnswer(){
  setanswer("loading...")
  const response = await axios({
    url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAF6QiQoV8mrpI9tdsNspd5Xy0vp_gYL-U",
    method:"post",
    data :{contents:[{parts:[{text:question}]}
  ],

  },});
  setanswer (response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
}
  return (
    <>
    <div className= "w-full"></div>
      <h1 className="bg-yellow-300">Chat AI</h1>
      <textarea 
      className="border rounded w-full"
      value={question} 
      onChange={(e)=> setquestion(e.target.value)} 
      cols="30" 
      rows="10"
      placeholder="Hey,Ask anything to me.
        Primarily I have been developed by VIBHAS for his project work but 
        I will surely help you.">
      </textarea>
      <button onClick={generateAnswer}> Generate Answer </button>
      <pre>{answer}</pre>
    </>
  )
}

export default App
