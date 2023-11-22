import prisma from "@/app/lib/database/database";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    const user = await prisma.user.findMany()
    return NextResponse.json(user)
}
export async function POST(req, res) {

    

    const data = await req.json();
    return NextResponse.json(data)
}