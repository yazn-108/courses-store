import axiosClient from "./AxiosClient"
const AllProducts = () => axiosClient.get("/allProducts", { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_ID}` } })
const ProductById = (productId) => axiosClient.get(`/allProducts/${productId}`, { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_ID}` } })
const ProductByCategory = (productCategory) => axiosClient.get(`/filter/category/${productCategory}`, { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_ID}` } })
const CheckUserProduct = (productIdAndUserId) => axiosClient.post(`/filter/checkUserProduct`, productIdAndUserId, { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_ID}` } })
export {
    AllProducts,
    ProductById,
    ProductByCategory,
    CheckUserProduct
}