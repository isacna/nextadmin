import {connectToDB} from "./database/database";
import { User } from "./database/model";

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;

    try {
        connectToDB();
        const count = await User.find({ email: { $regex: regex } }).count();
        const users = await User.find({ email: { $regex: regex } })
          .limit(ITEM_PER_PAGE)
          .skip(ITEM_PER_PAGE * (page - 1));
        return { count, users };

    } catch (err) {
        console.log(err)
        throw new Error("Error fetching users");
    }
}

export const fetchUser = async (id) => {
    console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
}

export const fetchCards = async () => {
    const arrayCards = []
    try {
      const count = await User.find().count();
        // const count = await prisma.user.count();

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