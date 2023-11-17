import { default as prisma } from "./database"


export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;

    try {
        const count = await prisma.user.count();
        const users = await prisma.user.findMany({
            skip: (page - 1) * ITEM_PER_PAGE,
            take: ITEM_PER_PAGE,
            where: {
                OR: [
                    { name: { contains: q } },
                    { email: { contains: q } },
                ],
            },
        });



        return { count, users };
    } catch (err) {
        console.log(err)
        throw new Error("Error fetching users");
    }
}

export const fetchUser = async (id) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
        });

        return user;
    } catch (err) {
        console.log(err)
        throw new Error("Error fetching user");
    }
}

export const fetchCards = async () => {
    const arrayCards = []
    try {
        const count = await prisma.user.count();

        arrayCards.push({ 
            id: 1,
            title: "Users", 
            number: count, 
            change: count,
        })
        return arrayCards ;
    } catch (err) {
        console.log(err)
        throw new Error("Error cards");
    }
}