import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Game",
  },
}, { timestamps: true });

// ✅ SAFE MODEL EXPORT
const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;