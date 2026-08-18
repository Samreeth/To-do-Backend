function TaskItem({ task, onDelete, onToggleComplete }) {
  const priorityClass = task.priority ? task.priority.toLowerCase() : 'medium';

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-main">
        <input
          type="checkbox"
          checked={Boolean(task.completed)}
          onChange={() => onToggleComplete(task._id, !task.completed)}
        />

        <div className="task-content">
          <h3 className={task.completed ? 'completed-title' : ''}>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      </div>

      <div className="task-actions">
        <span className={`priority ${priorityClass}`}>{task.priority}</span>
        <button type="button" className="delete-btn" onClick={() => onDelete(task._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;