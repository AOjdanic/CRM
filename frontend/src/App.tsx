import { useState, type ChangeEvent } from 'react';
import APIService from './api';
import { Button } from './components/Button/Button';

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
    <div className="flex justify-center w-3xl flex-col gap-10 mx-auto">
      <div className="flex gap-4">
        <label>
          Name
          <input value={name} onChange={setTodoName} />
        </label>

        <label>
          Content
          <input value={content} onChange={setTodoContent} />
        </label>

        <Button onClick={createTodo} variant="primary" size="medium">
          Create To Do
        </Button>
      </div>

      <Button onClick={getAllTodos} variant="primary" size="large">
        Get All Todos
      </Button>
    </div>
  );
}
