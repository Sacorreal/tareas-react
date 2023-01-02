import TaskList from "../components/TaskList";
import TaskForm from "./TaskForm";


function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto py-10">
      <TaskForm/>
      <TaskList/>
      </div>
      
    </main>
  );
}

export default App;
