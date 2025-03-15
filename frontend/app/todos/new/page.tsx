'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createTodo } from '../../api';
import '../../../styles/globals.css';


export default function CreateTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await createTodo({ title, description });
    router.push('/');
  }

  return (
    <div className="container">
      <h1>Create Todo</h1>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
