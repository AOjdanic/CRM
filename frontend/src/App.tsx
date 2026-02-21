import { useState, type ChangeEvent } from 'react';
import APIService from './api';

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
    APIService.post('/todos', { name, content });
  }

  async function getAllTodos() {
    const res = await APIService.get('/todos');

    console.log(res.data);
  }

  return (
    <div className="flex justify-center w-full">
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
