import { Schema, model, Types } from "mongoose";

const purchase = new Schema({
  shippingAddress: { 
    type: String 
  },
  album: { 
    type: Types.ObjectId, 
    ref: "Album" 
  }
});

const Purchase = model("Purchase", purchase);

export default Purchase;
