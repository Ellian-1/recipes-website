import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const recipe = await prisma.recipe.findMany();

  return NextResponse.json(recipe);
}

export async function POST(request: any) {
  const { name, steps, image } = await request.json();
  const newTask = await prisma.recipe.create({
    data: {
      name,
      steps,
      image,
    },
  });
  return NextResponse.json(newTask);
}
