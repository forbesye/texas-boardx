import Layout from "components/Layout";
import GameList from "components/GameList";
import gameInfo from "public/game_info.json"
import { PrismaClient } from "@prisma/client"

export default function Home({ games }) {
  return (
    <Layout>
      <GameList games={games} />
    </Layout>
  );
}

export async function getStaticProps() {
  // const res = await fetch("../public/game_info.json");
  // const data = await res.json();
  const prisma = new PrismaClient()
  const games = await prisma.games.findMany()

  return { props: { games } }
}
