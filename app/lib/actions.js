"use server";

import { default as prisma } from "./database"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
    const { username, email, password, isAdmin, isActive, image } =
        Object.fromEntries(formData);

    try {
        const hashedPassword = await bcrypt.hash(password, 8);


        const user = await prisma.user.create({
            data: {
                name: username,
                email,
                password: hashedPassword,
                isAdmin: isAdmin === "yes" ? true : false,
                image: image,
                roles: {
                    connectOrCreate: {
                        where: {
                            grup: "ADM"
                        },
                        create: {
                            grup: "ADM",
                            operacional: "WRITE",
                            blipExtension: "WRITE",
                            blog: "WRITE"
                        }
                    }
                }
            }
        })
    } catch (err) {
        console.log(err);
        throw new Error("Failed to create user!");
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
    const { id, name, email, password, image, isAdmin, isActive } =
        Object.fromEntries(formData);

    try {
        const updateFields = {
            name,
            email,
            password,
            isAdmin,
            isActive,
            image,
        };

        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key] === "" || undefined) && delete updateFields[key]
        );

        await prisma.user.update({
            where: {
                id: parseInt(id),
            },
            data: {
                ...updateFields,
            },
        });
    } catch (err) {
        console.log(err);
        throw new Error("Failed to update user!");
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};

export async function authenticate(
    prevState,
    formData
) {
    try {
        await signIn('credentials', Object.fromEntries(formData));
    } catch (error) {
        if ((error).message.includes('CredentialsSignin')) {
            return 'CredentialsSignin';
        }
        throw error;
    }
}