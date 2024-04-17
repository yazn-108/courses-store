import { Schema, model, models } from 'mongoose'
const CartProductSchema = new Schema({
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
    type: String,
    ref: "User"
  }
})
const Product = models.CartProduct || model("CartProduct", CartProductSchema);
export default Product;