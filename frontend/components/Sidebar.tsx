"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Todo {
  _id: string;
  title: string;
  createdAt: string;
}

const Sidebar = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/todos");
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error); 
      }
    };

    fetchTodos();
  }, []);

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-1/3 h-screen bg-white border-r p-4">
      <h2 className="text-xl font-bold mb-4">TODO</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search todos..."
        className="w-full p-2 border rounded mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Todo List */}
      <div className="overflow-y-auto h-[calc(100%-60px)]">
        {filteredTodos.length > 0 ? (
          filteredTodos.map(todo => (
            <Link key={todo._id} href={`/todo/${todo._id}`}>
              <div className="p-3 border-b cursor-pointer hover:bg-gray-100">
                <h3 className="font-semibold">{todo.title}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(todo.createdAt).toDateString()}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">No todos found</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
