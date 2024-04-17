import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Product from "@/lib/modals/CartProduct"
export const POST = async (req) => {
  const adminId = req.headers.get("authorization")?.split(" ")[1]
  try {
    // if (adminId === process.env.NEXT_PUBLIC_ADMIN_ID) {
    const body = await req.json();
    const { productId, userId } = body;
    await connect();
    const product = await Product.findOne({ productId, user: userId })
    return new NextResponse(JSON.stringify(product), { status: 200 });
    // }
    // return new NextResponse("you don't have access to api", { status: 403 })
  } catch (error) {
    return new NextResponse("Error in fetching product " + error, {
      status: 500,
    });
  }
};