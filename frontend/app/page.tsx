'use client';
import { useEffect, useState } from 'react';
import { getTodos, deleteTodo } from './api';
import Link from 'next/link';
import '../styles/globals.css';

interface Todo {
  _id: string;
  title: string;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchTodos() {
      const data = await getTodos();
      setTodos(data.todos);
    }
    fetchTodos();
  }, []);

  async function handleDelete(id: string) {
    await deleteTodo(id);
    setTodos(todos.filter(todo => todo._id !== id));
  }

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="actions">
        <input
          type="text"
          placeholder="Search todos..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="button-container">
        <Link href="/todos/new">
          <button>Create Todo</button>
        </Link>
      </div>
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo._id} className="todo-item">
            <Link href={`/todos/${todo._id}`}>{todo.title}</Link>
            <button onClick={() => handleDelete(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
