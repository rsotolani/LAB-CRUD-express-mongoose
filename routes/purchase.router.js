import { Router } from "express";
import PurchaseModel from "../models/purchase.model.js";
import AlbumModel from "../models/album.model.js";

const router = Router();

router.post("/purchase", async (req, res) => {
  try {
    const purchase = await PurchaseModel.create(req.body);

    return res.status(201).json(purchase);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.get("/purchase/:purchaseId", async (req, res) => {
  try {
    const { purchaseId } = req.params;

    const purchase = await PurchaseModel.findById(purchaseId).populate("album");

    return res.status(200).json(purchase);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

export default router;
