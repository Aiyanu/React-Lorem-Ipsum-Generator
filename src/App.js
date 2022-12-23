import React, { useState } from 'react';
import data from './data';
function App() {
  const [count,setCount] = useState(0);
  const [text,setText] = useState([])
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    let amount = parseInt(count);
    if(amount<=0){
      amount = 1
    }
    if(amount>10){
      amount= 10
    }
    setText(data.slice(0,amount));
  }

  return (
  <section className='section-center'>
    <h3>tired of boring lorem ipsum?</h3>
    <form action="" onSubmit={handleSubmit} className="lorem-form">
      <label htmlFor="amount">
        paragraphs:
      </label>
      <input 
      type="number"
      min={"0"}
      max={data.length}
      name='amount' 
      id='amount' 
      value={count} 
      onChange={(e)=>setCount(e.target.value)}/>
      <button type='sumbit' className="btn">generate</button>
    </form>
    <article className="lorem-text">
      {text.map((item,index)=>(
        <p key={index}>
          {item}
        </p>
      ))}
    </article>
  </section>
    )
}

export default App;
