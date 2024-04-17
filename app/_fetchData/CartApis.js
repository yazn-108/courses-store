import axiosClient from "./AxiosClient"
const AddProductToUserCart = (product, userToken) => axiosClient.post("/Cart", product, {
    headers: {
        Authorization: `Bearer ${userToken}`,
        AdminToken: `${process.env.NEXT_PUBLIC_ADMIN_ID}`
    }
})
const GetUserCartItems = (userToken) => axiosClient.get("/Cart", {
    headers: {
        Authorization: `Bearer ${userToken}`,
        AdminToken: `${process.env.NEXT_PUBLIC_ADMIN_ID}`
    }
})
const DeleteCartItem = (productId, userToken) => axiosClient.delete(`/Cart?productId=${productId}`, {
    headers: {
        Authorization: `Bearer ${userToken}`,
        AdminToken: `${process.env.NEXT_PUBLIC_ADMIN_ID}`
    }
})
const DeleteAllCartItems = (userToken) => axiosClient.delete("/Cart/deleteAll", {
    headers: {
        Authorization: `Bearer ${userToken}`,
        AdminToken: `${process.env.NEXT_PUBLIC_ADMIN_ID}`
    }
})
export default {
    AddProductToUserCart,
    GetUserCartItems,
    DeleteCartItem,
    DeleteAllCartItems
}