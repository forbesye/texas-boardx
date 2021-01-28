import { useRouter } from "next/router";
import Head from "next/head";
import gameInfo from "public/game_info.json"
import { PrismaClient } from "@prisma/client"

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

const prisma = new PrismaClient()

export async function getServerSideProps({ params }) {
  // const req = await fetch(`/${params.id}.json`);
  // const data = await req.json();
  // // const data = await gameInfo.json()
  // const data = await prisma.games.findMany()

  // return {
  //   props: { game: data },
  // }
}
