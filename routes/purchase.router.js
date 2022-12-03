import { Router } from "express";
import Purchase from "../models/purchase.model.js";
import Album from "../models/album.model.js";

const purchaseRouter = Router();

//3.1 Crie a rota POST /purchases
purchaseRouter.post("/purchase", async (req, res) => {
  try {
    //Essa rota irá receber requests contendo o objeto com as informações da purchase:
    //shippingAddress - String
    //albumId - ObjectId
    console.log(req.body);

    //Criar um novo documento purchase com os valores recebidos em req.body, utilizando o model Purchase.
    //A propriedade albumId deve guardar apenas a referencia do _id do objeto do album.
    const purchase = await Purchase.create(req.body);

    //Retornar uma response em JSON com o conteúdo da purchase criada.
    return res.status(201).json(purchase);

  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

//3.2 Crie a rota GET /purchases/:purchaseId
purchaseRouter.get("/purchase/:purchaseId", async (req, res) => {
  try {
    //Essa rota recebe o id da purchase como parâmetro de rota purchaseId
    const { purchaseId } = req.params;

    //Retornar uma purchase encontrada pelo id, utilizando o model Purchase.
    const purchase = await Purchase.
    findById(purchaseId).
    //Popular a propriedade album para receber os detalhes do album.
    populate("album");

    //Retornar uma response em JSON incluindo o objeto populado da purchase.
    return res.status(200).json(purchase);
    
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

export default purchaseRouter;
