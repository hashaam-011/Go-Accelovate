import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Sample Task 1' },
    { id: '2', title: 'Sample Task 2' },
  ]);

  const handleDelete = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id: string) => {
    const newTitle = prompt('Edit Task Title:', '');
    if (newTitle) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, title: newTitle } : task
        )
      );
    }
  };

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
