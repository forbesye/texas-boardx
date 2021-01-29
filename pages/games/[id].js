import { useRouter } from "next/router";
import Head from "next/head";
import Prisma from "components/PrismaClient"
import Layout from "components/Layout"

export default function Game({ game }) {
  const { title, price, players, time, img, info } = game

  return (
    <Layout title={title}>
      <section className="text-gray-700 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt={title} className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={img} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-bold mb-2">{title}</h1>
              <p className="leading-relaxed">{info}</p>
              <div className="flex flex-row justify-around py-4">
                <h2 className="title-font text-gray-500">👥 {players} players</h2>
                <h2 className="title-font text-gray-500">🕒 ~{time} minutes</h2>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">{`$${price}/day`}</span>
                <button className="flex ml-auto text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded">Add to bag</button>
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
  console.log(id)
  const game = await Prisma.games.findUnique({
    where: {
      id: id
    }
  })

  return { props: { game }, revalidate: 60 }
}
