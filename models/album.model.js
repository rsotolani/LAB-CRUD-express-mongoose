import { Schema, model } from "mongoose";

const album = new Schema({
  performer: { 
    type: String 
  },
  title: { 
    type: String 
  },
  cost: { 
    type: Number 
  }
});

const Album = model("Album", album);

export default Album;
