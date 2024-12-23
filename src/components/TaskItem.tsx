import React from 'react';

interface TaskItemProps {
  task: { id: string; title: string };
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onEdit }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <span>{task.title}</span>
      <div className="space-x-2">
        <button
          onClick={() => onEdit(task.id)}
          className="text-blue-500 hover:text-blue-700"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
