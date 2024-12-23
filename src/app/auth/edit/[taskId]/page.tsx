'use client';

import { useRouter } from "next/router";
import { useState } from "react";

export default function EditPage({ params }: { params: { taskId: string } }) {
  const [task, setTask] = useState("");
  const router = useRouter();

  const updateTask = async () => {
    await fetch(`/api/tasks/${params.taskId}`, {
      method: "PUT",
      body: JSON.stringify({ title: task }),
    });
    router.push("/dashboard");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Edit Task</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={updateTask}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Update
      </button>
    </div>
  );
}
