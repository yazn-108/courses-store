import connect from "@/lib/db";
import AllProducts from "@/lib/modals/AllProducts"
import { NextResponse } from "next/server"
export const GET = async (req) => {
  const adminId = req.headers.get("authorization")?.split(" ")[1]
  try {
    if (adminId === process.env.NEXT_PUBLIC_ADMIN_ID) {
      await connect();
      const Products = await AllProducts?.find()
      return new NextResponse(JSON.stringify(Products), { status: 200 })
    }
    return new NextResponse("you don't have access to api", { status: 403 })
  } catch (error) {
    return new NextResponse("Error in fetching users" + error, { status: 500 })
  }
}
