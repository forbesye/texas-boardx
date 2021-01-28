import Layout from "components/Layout";
import GameList from "components/GameList";
import Prisma from "components/PrismaClient"

export default function Home({ games }) {
  return (
    <div className="bg-gray-50">
      <Layout>  
        <GameList games={games} />
      </Layout>
    </div>
    
  );
}

export async function getStaticProps() {
  const games = await Prisma.games.findMany()

  return { props: { games } }
}
