import { useState, type ChangeEvent } from 'react';

export function App() {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  function setTodoName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function setTodoContent(e: ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value);
  }

  function createTodo() {
    fetch('http://localhost:8080/api/todos/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        content,
      }),
    });
  }

  async function getAllTodos() {
    const res = await fetch('http://localhost:8080/api/todos/');

    const data = await res.json();

    console.log(data);
  }

  return (
    <div>
      <label>
        Name
        <input value={name} onChange={setTodoName} />
      </label>

      <label>
        Content
        <input value={content} onChange={setTodoContent} />
      </label>

      <button onClick={createTodo}>create to do</button>

      <button onClick={getAllTodos}>get all todos</button>
    </div>
  );
}
