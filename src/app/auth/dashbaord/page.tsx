import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import TaskList from "@/components/TaskList";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
    return null; // Prevent rendering if redirect is triggered
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Welcome, {session.user?.name ?? "User"}</h1>
      {/* Ensure userId is passed if it exists */}
      <TaskList userId={session.user?.id || ""} />
    </div>
  );
}
