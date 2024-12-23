import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId");

  const tasks = await prisma.task.findMany({
    where: { userId },
  });

  return new Response(JSON.stringify(tasks));
}

export async function POST(request: Request) {
  const { title, userId } = await request.json();

  const newTask = await prisma.task.create({
    data: { title, userId },
  });

  return new Response(JSON.stringify(newTask));
}

export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop();

  await prisma.task.delete({
    where: { id },
  });

  return new Response("Task deleted");
}

export async function PUT(request: Request) {
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop();
  const { title } = await request.json();

  const updatedTask = await prisma.task.update({
    where: { id },
    data: { title },
  });

  return new Response(JSON.stringify(updatedTask));
}
