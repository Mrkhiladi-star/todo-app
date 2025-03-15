// frontend/components/TodoList.tsx
import "../styles/globals.css";
import { Todo } from "../app/page";

interface TodoListProps {
  todos: Todo[];
  onTodoClick: (todo: Todo) => void;
}

export default function TodoList({ todos, onTodoClick }: TodoListProps) {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo._id}
          onClick={() => onTodoClick(todo)}
          className="p-2 bg-white shadow rounded cursor-pointer hover:bg-gray-50"
        >
          <h3 className="font-bold">{todo.title}</h3>
          <p className="text-sm text-gray-600">{todo.description}</p>
          <p className="text-xs text-gray-400">
            {new Date(todo.createdAt).toLocaleString()}
          </p>
        </li>
      ))}
    </ul>
  );    
}