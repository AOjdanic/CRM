import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    const [name, setName] = useState('');
    const [content, setContent] = useState('');


    function setTodoName(e) {
        setName(e.target.value)
    }

    function setTodoContent(e) {
        setContent(e.target.value)
    }


    function createTodo() {
        fetch('http://localhost:8080/api/todos/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                content
            })
        })
    }


    async function getAllTodos() {
        const res = await fetch('http://localhost:8080/api/todos/');

        const data = await res.json();

        console.log(data)
    }

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React fskdlfjlksdj</h1>
            <div className="card">
                <label>
                    Name
                    <input value={name} onChange={setTodoName}/>
                </label>

                <label>
                    Content
                    <input value={content} onChange={setTodoContent}/>
                </label>


                <button onClick={createTodo}>
                    create to do
                </button>


                <button onClick={getAllTodos}>
                    get all todos
                </button>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
