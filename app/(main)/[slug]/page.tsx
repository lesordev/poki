import { redirect } from "next/navigation";

import { GameCell } from "@/components/GameCell";
import { GamePlay } from "@/components/GamePlay";
import { Navigation } from "@/components/Navigation";
import { getGameDetail } from "@/services/get-game-detail.service";
import { getGames } from "@/services/get-games.service";
import { cn } from "@/utils/cn.util";

type GameDetailPageProps = {
  params: { slug: string };
};

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  const games = await getGames();
  const currentGame = await getGameDetail(params.slug);

  if (!currentGame) {
    return redirect("/");
  }

  return (
    <div className="mx-auto w-max">
      <div className={cn("grid-container pt-4")}>
        <Navigation />

        <GamePlay
          className={cn("col-span-6 col-start-2 row-span-4", "11c:col-span-8 11c:row-span-5")}
          {...currentGame}
        />

        {games.map((game) => (
          <GameCell key={game.name} {...game} />
        ))}
      </div>
    </div>
  );
}