import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const [searchInput, setSearchInput] = useState('');

  const addItem = (e) => {
    setSearchInput(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, searchInput])
    setSearchInput('')
  }



  return (
    <section className="w-screen h-screen bg-slate-900 flex justify-center items-center">
      <div className="todoContainer px-12 py-10 h-3/5 max-h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-md shadow-slate-950">
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          className="py-2 px-2 bg-transparent border  text-gray-100 transition-all"
          placeHolder="Item here..."
          value={searchInput}
          onChange={addItem}/>
          <button className="text-white uppercase text-sm px-5 py-2 ms-10 border hover:shadow-md hover:shadow-green-700 transition-all tracking-widest">Add Todo</button>
        </form>

        <ul className="mt-10 flex flex-col flex-wrap">
          {todos.map((todo) => (
            <li 
            key={todo}
            className="text-slate-50 px-2 border-b border-slate-500 pb-3 pt-3">{todo}
            <button 
            className="uppercase tracking-widest text-sm ms-5">X</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );


}

export default App;
