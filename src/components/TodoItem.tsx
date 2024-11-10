import { Trash2 } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  setOnChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({
  todo,
  setOnChange,
  onDelete,
}: TodoItemProps) {
  return (
    <div className="flex space-x-2">
      <label className="flex space-x-2 grow bg-violet-100 border border-violet-500 rounded-md p-2 cursor-pointer  hover:bg-violet-200 items-center">
        <input
          type="checkbox"
          className="w-5 h-5"
          checked={todo.completed}
          onChange={(e) => setOnChange(todo.id, e.target.checked)}
        />
        <span
          className={
            todo.completed
              ? 'line-through text-violet-400 text-xl font-medium'
              : 'text-violet-800 text-xl font-semibold'
          }
        >
          {todo.title}
        </span>
      </label>
      <button className="p-1" onClick={() => onDelete(todo.id)}>
        <Trash2 size={24} className="text-violet-800 hover:text-rose-500" />
      </button>
    </div>
  );
}
