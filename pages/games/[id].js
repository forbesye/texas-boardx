import { useRouter } from "next/router";
import Head from "next/head";
import Prisma from "components/PrismaClient"
import Layout from "components/Layout"

export default function Game({ game }) {
  const { title, price, players, time, img, info } = game

  return (
    <Layout title={title}>
      <section class="text-gray-700 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={img} />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{title}</h1>
              <p class="leading-relaxed">{info}</p>
              <h2 class="text-sm title-font text-gray-500 tracking-widest">👥 {players} players</h2>
              <h2 class="text-sm title-font text-gray-500 tracking-widest">🕒 {time} minutes</h2>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">{`$${price}/day`}</span>
                <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add to bag</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const games = await Prisma.games.findMany()
  const paths = games.map(game => {
    return { params: { id: game.id.toString() } }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const id = parseInt(context.params.id)
  const game = await Prisma.games.findUnique({
    where: {
      id: id
    }
  })

  return { props: { game } }
}
