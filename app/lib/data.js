import {connectToDB} from "./database/database";
import { User } from "./database/model";
import { dbRompimento } from "./database/rompimento";

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
      connectToDB();
      const count = await User.find().count();

        arrayCards.push({ 
            id: 1,
            title: "Usuários Ativos", 
            number: count, 
            change: count,
        })

        const rompimentos = await dbRompimento.find({ data_abertura: { $gte: new Date('2023-11-22') }}).count();

        arrayCards.push({ 
            id: 2,
            title: "Rompimentos", 
            number: rompimentos, 
            change: rompimentos,
        })
        return arrayCards ;
    } catch (err) {
        console.log(err)
        throw new Error("Error cards");
    }
}

export async function consultarRompimentos() {
  try {
      connectToDB();

      const rompimentos = await dbRompimento.find({ data_abertura: { $gte: new Date('2023-11-22') }});
      
      return rompimentos;
  } catch (err) {
      console.log(err);
      throw new Error("Failed to get rompimentos!");
  }
}