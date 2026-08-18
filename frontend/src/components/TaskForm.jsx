import {useState} from 'react'

const initialForm = {
  title: "",
  description: "",
  priority: "MEDIUM",
};

function TaskForm({onAddTask}) {
    const [formData,setFormData] = useState(initialForm);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) {
      alert("Title and description are required");
      return;
    }

    onAddTask(formData);

    setFormData(initialForm);
  };



  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>Add New Task</h2>

      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Task title"
        required
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Task description"
        rows="4"
        required
      />

      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
      >
        <option value="LOW">Low</option>
        <option value="MEDIUM">Medium</option>
        <option value="HIGH">High</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm
