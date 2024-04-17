import { Schema, model, models } from 'mongoose'
const ProductsSchema = new Schema({
  bannerUrl: {
    type: String,
  },
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  productId: {
    type: String,
  },
  category: {
    type: String,
  },
  instantDelivery: {
    type: Boolean,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
})
const AllProducts = models.products || model("products", ProductsSchema);
export default AllProducts;