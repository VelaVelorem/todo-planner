import './App.css';
import { useState } from 'react';
import Instructions from './components/Instructions';

function App() {
  const [todos, setTodos] = useState([])
  const [searchInput, setSearchInput] = useState('');

  const addItem = (e) => {
    setSearchInput(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (todos.length >= 10) {
      alert('Woops! You can only add a maximum of 10 items to the list. Please delete a task before adding a new one.')
      return;
    }
    if (searchInput.trim() === '') {
      alert("Oops, you need to add a valid task!")
      return;
    }
    if (searchInput.trim().length > 25) {
      alert("Sorry, your todo is longer than 25 characters!")
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      text: searchInput.trim(),
      // timestamp: new Date().toLocaleTimeString(),
    };

    setTodos([...todos, newTodo])
    setSearchInput('')
    console.log(newTodo)
  }

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos)
  }

  return (
    <>
      <section className="w-screen h-screen bg-slate-900 flex justify-evenly flex-wrap items-center border-b border-slate-400">
        <div className="todoContainer px-12 py-10 h-3/5 max-h-full  bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg shadow-slate-950">
          <form
            onSubmit={handleSubmit}
            className="flex gap-5">
            <input
              type="text"
              className="py-2 px-2 bg-transparent border  text-gray-100 transition-all"
              placeholder="Item here..."
              value={searchInput}
              onChange={addItem} />
            <button className="text-white uppercase text-sm px-5 py-2 border hover:shadow-md hover:text-green-300 hover:border-green-300 transition-all tracking-widest">Add Todo</button>
          </form>

          <ul className="mt-10 flex flex-col flex-wrap">
            {todos.map((todo) => (
              <li
                key={todo}
                className="text-slate-50 px-2 border-b border-slate-500 pb-3 pt-3  flex items-center justify-between text-wrap hover:bg-slate-500 hover:bg-opacity-40">{todo.text}
                <button
                  className="uppercase tracking-widest text-sm ms-5"
                  onClick={() => handleDelete(todo.id)}>X</button>
              </li>
            ))}
          </ul>
        </div>
        
        <Instructions className="order-first" />
      </section>


    </>
  );


}

export default App;
