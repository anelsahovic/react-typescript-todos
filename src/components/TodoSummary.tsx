import { Todo } from '../types/todo';

interface TodoSummaryProps {
  todos: Todo[];
  clearAllCompleted: () => void;
  populate: () => void;
}

export default function TodoSummary({
  todos,
  clearAllCompleted,
  populate,
}: TodoSummaryProps) {
  const completedTodos: Todo[] = todos.filter(
    (todo) => todo.completed === true
  );

  return (
    <div>
      <div className="flex flex-col items-center space-y-2">
        {todos.length > 0 ? (
          <p className="text-md text-violet-950 font-semibold text-center my-2">
            {completedTodos.length} / {todos.length} completed
          </p>
        ) : (
          <div className="space-y-2 flex flex-col items-center ">
            <p className="text-md text-violet-950 font-semibold text-center my-2">
              No todos yet.
            </p>
            <button onClick={populate} className="text-sm  hover:underline">
              Populate with dummy data
            </button>
          </div>
        )}
        {completedTodos.length > 0 && (
          <button
            className="text-violet-900 hover:text-rose-500"
            onClick={clearAllCompleted}
          >
            Clear All Completed
          </button>
        )}
      </div>
    </div>
  );
}
