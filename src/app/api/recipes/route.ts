import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const recipes = await prisma.recipe.findMany();

  return NextResponse.json(recipes);
}

export async function POST(request: any) {
  const { name, steps, image } = await request.json();
  const newRecipe = await prisma.recipe.create({
    data: {
      name,
      steps,
      image,
    },
  });
  return NextResponse.json(newRecipe);
}
