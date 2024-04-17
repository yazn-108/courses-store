import connect from "@/lib/db";
import Product from "@/lib/modals/CartProduct";
import { NextResponse } from "next/server";
export const DELETE = async (req) => {
  const adminId = req.headers.get("AdminToken")
  try {
    if (adminId === process.env.NEXT_PUBLIC_ADMIN_ID) {
      const userId = req.headers.get("authorization")?.split(" ")[1]
      await connect();
      await Product?.deleteMany({ user: { $in: userId } })
      return new NextResponse("deleted all cart products", { status: 200 })
    }
    return new NextResponse("you don't have access to api", { status: 403 })
  } catch (error) {
    return new NextResponse("Error in fetching users" + error, { status: 500 })
  }
}