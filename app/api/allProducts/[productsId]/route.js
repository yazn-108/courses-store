import { NextResponse } from "next/server";
import connect from "@/lib/db";
import AllProducts from "@/lib/modals/AllProducts"
export const GET = async (req, { params }) => {
  const adminId = req.headers.get("authorization")?.split(" ")[1]
  const productId = params?.productsId;
  try {
    // if (adminId === process.env.NEXT_PUBLIC_ADMIN_ID) {
    await connect();
    const product = await AllProducts.findOne({ productId });
    if (!product) {
      return new NextResponse(
        JSON.stringify({
          message: "product not found or does not belong to the user",
        }),
        { status: 404 }
      );
    }
    return new NextResponse(JSON.stringify(product), { status: 200 });
    // }
    // return new NextResponse("you don't have access to api", { status: 403 })
  } catch (error) {
    return new NextResponse("Error in fetching product " + error, {
      status: 500,
    });
  }
};