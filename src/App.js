import Todo from "./components/Todo";

function App() {
  return (
    <div className="p-6 ">
      <h1>My Todos</h1>
      <Todo text="Learn vue" />
      <Todo text="Learn react" />
      <Todo text="Learn next" />
    </div>
  );
}

export default App;
