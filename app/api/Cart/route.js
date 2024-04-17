import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Product from "@/lib/modals/CartProduct";
import { CheckUserProduct } from "@/app/_fetchData/Apis";
export const GET = async (req) => {
  const adminId = req.headers.get("AdminToken")
  try {
    // if (adminId === process.env.NEXT_PUBLIC_ADMIN_ID) {
    const userId = req.headers.get("authorization")?.split(" ")[1]
    await connect();
    const products = await Product.find({ user: userId });
    return new NextResponse(JSON.stringify(products), { status: 200 });
    // }
    // return new NextResponse("you don't have access to api", { status: 403 })
  } catch (error) { }
};
export const POST = async (req) => {
  const adminId = req.headers.get("AdminToken")
  try {
    // if (adminId === process.env.NEXT_PUBLIC_ADMIN_ID) {
    const userId = await req.headers.get("authorization")?.split(" ")[1]
    const body = await req.json();
    const { bannerUrl, title, price, description, productId, category, instantDelivery } = body;
    await connect()
    const newProduct = new Product({
      bannerUrl,
      title,
      price,
      description,
      productId,
      category,
      instantDelivery,
      user: userId
    });
    let productState;
    await CheckUserProduct({ productId, userId }).then((res) => {
      !res.data && newProduct.save();
      if (!res.data) {
        productState = true
      } else {
        productState = false
      }
    })
    if (productState) {
      return new NextResponse(
        JSON.stringify({ message: "Product added", Product: newProduct }),
        { status: 201 }
      );
    } else {
      return new NextResponse(
        JSON.stringify({ message: "product already exists", Product: false }),
        { status: 201 }
      );
    }
    // }
    // return new NextResponse("you don't have access to api", { status: 403 })
  } catch (error) { }
};
export const DELETE = async (req) => {
  const adminId = req.headers.get("AdminToken")
  try {
    // if (adminId === process.env.NEXT_PUBLIC_ADMIN_ID) {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");
    const userId = req.headers.get("authorization")?.split(" ")[1]
    await connect();
    const userProduct = await Product.findOne({ productId, user: userId })
    if (!userProduct) {
      return new NextResponse(
        JSON.stringify({
          message: "product not found or does not belong to the user",
        }),
        {
          status: 404,
        }
      );
    }
    userProduct && await Product.findOneAndDelete(productId)
    return new NextResponse(
      JSON.stringify({ message: "product deleted successfully" }),
      { status: 200 }
    );
    // }
    // return new NextResponse("you don't have access to api", { status: 403 })
  } catch (error) { }
};