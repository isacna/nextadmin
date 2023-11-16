import { default as prisma } from "./database"


async function teste(){
    const user = await prisma.user.findMany()
    return user
}