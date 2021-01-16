import { useRouter } from "next/router";
import Head from "next/head";

export default function Game({ game }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>{game.name}</title>
      </Head>
      <h1>
        {game.name} {game.id} {game.description}
      </h1>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: { game: data },
  };
}
