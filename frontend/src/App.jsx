import { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { createTask, deleteTask, fetchTasks, updateTask } from './api/taskApi';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await fetchTasks();
      setTasks(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to load tasks:', error);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAddTask = async (taskData) => {
    try {
      await createTask(taskData);
      await loadTasks();
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      await loadTasks();
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  const handleToggleTask = async (taskId, completed) => {
    const task = tasks.find((item) => item._id === taskId);

    if (!task) return;

    try {
      await updateTask(taskId, { ...task, completed });
      await loadTasks();
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Manager</h1>
      </header>

      <TaskForm onAddTask={handleAddTask} />

      {loading ? (
        <p className="loading-state">Loading tasks...</p>
      ) : (
        <TaskList
          tasks={tasks}
          onDelete={handleDeleteTask}
          onToggleComplete={handleToggleTask}
        />
      )}
    </div>
  );
}

export default App;
