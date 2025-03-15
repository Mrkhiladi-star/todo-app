'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getTodoById } from '../../api';

import '../../../styles/globals.css';

export default function ViewTodo() {
  const { id } = useParams();
  const [todo, setTodo] = useState<{ title: string; description: string } | null>(null);

  useEffect(() => {
    async function fetchTodo() {
      const data = await getTodoById(id as string);
      setTodo(data);
    }
    fetchTodo();
  }, [id]);

  if (!todo) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </div>
  );
}
