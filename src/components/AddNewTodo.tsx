import { useState } from 'react';

interface AddNewTodoProps {
  addNewTodo: (title: string) => void;
}

export default function AddNewTodo({ addNewTodo }: AddNewTodoProps) {
  const [input, setInput] = useState('');

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;

    addNewTodo(input.trim());
  }

  return (
    <form className="flex w-2/3 mx-auto" onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="bg-violet-100 p-2 text-violet-800 rounded-s-md shadow grow border-0 ring-0 outline-none focus:ring-2 focus:ring-violet-800"
        placeholder="Add new task..."
      />
      <button className="bg-violet-800 text-white w-16 shadow rounded-e-md p-1 hover:bg-violet-950">
        Add
      </button>
    </form>
  );
}
