const API_URL = 'http://localhost:5000/api/todos';

export async function getTodos(search = '', page = 1, limit = 10) {
  const response = await fetch(`${API_URL}?search=${search}&page=${page}&limit=${limit}`);
  return response.json();
}

export async function getTodoById(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export async function createTodo(todo: { title: string; description: string }) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });
  return response.json();
}

export async function updateTodo(id: string, todo: { title: string; description: string }) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });
  return response.json();
}

export async function deleteTodo(id: string) {
  return fetch(`${API_URL}/${id}`, { method: 'DELETE' });
}
