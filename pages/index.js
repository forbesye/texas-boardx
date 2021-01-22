import Layout from "components/Layout";
import GameList from "components/GameList";

export default function Home({ games }) {
  return (
    <Layout>
      <h1 className="text-gray-900 font-bold text-3xl">Catalog</h1>
      <GameList games={games} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/game_info.json");
  const games = await res.json();

  return { props: { games } };
}
