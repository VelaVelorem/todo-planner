import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faSquareMinus } from '@fortawesome/free-solid-svg-icons';

const Instructions = () => {
    return (
        <aside className="border p-10 order-first w-96 shadow-lg shadow-slate-950">
            <h1 className="text-3xl text-slate-100 mb-10">Todo List</h1>

            <p className="text-sm mb-10 text-gray-200">An easy-to-use and simplistic to-do list app where you can add, edit, and remove tasks. It keeps things simple by showing only 10 tasks at a time.</p>

            <ul className="flex flex-col text-gray-100 tracking-wider">
                <li className="flex items-center">
                    <FontAwesomeIcon icon={faSquareMinus} className="text-slate-100 mr-2 animate-bounce" /> Remove
                </li>
                <li className="flex items-center mt-1">
                    <FontAwesomeIcon icon={faPenToSquare} className="text-slate-100 mr-2 animate-bounce" /> Edit
                </li>
            </ul>

            <p className="text-xs mt-10 text-center text-gray-200">Created by <a href="https://velavelorem.github.io/hw-portfolio/">Haneefah Witherspoon</a></p>
        </aside>
    );
};

export default Instructions;
