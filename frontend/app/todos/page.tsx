'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import '../../styles/globals.css';


// Define the Todo type
type Todo = {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
};

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((res) => res.json())
      .then((data: Todo[]) => setTodos(data)) // ✅ Ensure TypeScript knows the type
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id} className="mb-2">
            <Link href={`/todos/${todo._id}`} className="text-blue-500 hover:underline">
              {todo.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
