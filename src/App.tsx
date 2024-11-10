import AddNewTodo from './components/AddNewTodo';
import TodoSummary from './components/TodoSummary';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';

function App() {
  const {
    todos,
    setTodoCompleted,
    addNewTodo,
    addDummyData,
    deleteTodo,
    deleteAllCompleted,
  } = useTodos();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow mx-auto w-full">
        <section className="h-full">
          <h1 className="py-10 text-center text-3xl text-violet-800 shadow font-bold">
            Todos
          </h1>
          <div className="space-y-5 p-5 max-w-lg mx-auto my-5 shadow bg-violet-400 rounded-md">
            <AddNewTodo addNewTodo={addNewTodo} />
            <TodoList
              todos={todos}
              setOnChange={setTodoCompleted}
              onDelete={deleteTodo}
            />
            <TodoSummary
              todos={todos}
              clearAllCompleted={deleteAllCompleted}
              populate={addDummyData}
            />
          </div>
        </section>
      </main>
      <footer className="text-white bg-violet-900 text-center p-2 mt-auto w-full">
        Developed by{' '}
        <a
          href="https://github.com/anelsahovic"
          className="hover:text-violet-500"
        >
          @anelsahovic
        </a>
      </footer>
    </div>
  );
}

export default App;
