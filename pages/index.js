import Layout from "components/Layout";
import GameList from "components/GameList";
import gameInfo from "public/game_info.json"

export default function Home({ games }) {
  return (
    <Layout>
      <GameList games={games} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("../public/game_info.json");
  const data = await res.json();

  // const data = await gameInfo.json()
  return { props: { data } }
}
