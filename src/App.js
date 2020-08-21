import React,{ useState } from 'react';
import './App.css';

function App() {
  const [input,setInput] = useState("");
  const [messages,setMessage] = useState([""]);
  
  console.log(input);
  console.log(messages);

  const sendMessage = (event) => 
  {
    event.preventDefault();
    setMessage([...messages,input]);
    setInput(" ");
  }
  return (
    <div className="App">
      <h1>Hibey-Messenger</h1>
      <form>
         <input value={input} onChange={event=> setInput(event.target.value)}/>
         <button onClick={sendMessage} type="submit">Send Message</button>
      </form>
      {/* Code to Display messages */}
      {
        messages.map(message => (
          <p>{message}</p>
        ))

      }
    </div>
  );
}

export default App;
