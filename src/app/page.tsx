import Hero from "@/components/Hero";
import { prisma } from "@/libs/prisma";

const loadRecipes = async () => {
  return await prisma.recipe.findMany();
};

export default async function Home() {
  const recipes = await loadRecipes();
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 h-screen">
      <div className="container max-w-7xl w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <Hero recipes={recipe} key={recipe.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
