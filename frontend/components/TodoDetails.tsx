// frontend/components/TodoDetails.tsx
import "../styles/globals.css";
import { Todo } from "../app/page";
import { useState } from "react";


interface TodoDetailsProps {
  todo: Todo;
  onUpdate: () => void;
}

export default function TodoDetails({ todo, onUpdate }: TodoDetailsProps) {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleUpdate = async () => {
    const res = await fetch(`/api/todos/${todo._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });
    if (res.ok) {
      onUpdate();
    }
  }; 

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        onClick={handleUpdate}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Update
      </button>
    </div>
  );
}