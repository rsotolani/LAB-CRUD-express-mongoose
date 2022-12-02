import { Schema, model, Types } from "mongoose";

const purchaseSchema = new Schema({
  shippingAddress: { type: String },
  album: { type: Types.ObjectId, ref: "Album" },
});

const PurchaseModel = model("Purchase", purchaseSchema);

export default PurchaseModel;
