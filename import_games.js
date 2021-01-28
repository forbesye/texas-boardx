const { PrismaClient } = require("@prisma/client")
const fetch = require('node-fetch');

const prisma = new PrismaClient()

async function main() {
    const data = await fetch('http://localhost:3000/game_info.json')
    const games = await data.json()

    games.forEach(async (game) => {
        const { title, img, price, info, players, time } = game
        const data = {
            title: title, 
            img: img, 
            price: price, 
            info: info, 
            players: players, 
            time: time
        }
        console.log(data)
        await prisma.games.create({
            data
        })
    })

    const allGames = await prisma.games.findMany()
    console.log(allGames)
}

main()

  .catch(e => {

    throw e

  })

  .finally(async () => {

    await prisma.$disconnect()

  })