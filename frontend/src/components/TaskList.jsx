import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onToggleComplete }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="empty-state">No tasks yet. Add one to get started.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
