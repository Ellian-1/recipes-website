import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

type Props = {
  params: {
    id: number;
  };
};

export async function GET(request: any, { params }: any) {
  const { id } = await params;
  const recipe = await prisma.recipe.findUnique({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json(recipe);
}

export async function PUT(request: any, { params }: Props) {
  const { id } = await params;
  const data = await request.json();
  const recipeUpdated = await prisma.recipe.update({
    where: {
      id: Number(id),
    },
    data: data,
  });
  return NextResponse.json(`Actualizando receta ${id}`);
}

export async function DELETE(request: any, { params }: Props) {
  const { id } = await params;
  try {
    const recipeRemoved = await prisma.recipe.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(`Eliminando receta ${id}`);
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
}
