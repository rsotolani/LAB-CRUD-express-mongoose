import { Router } from "express";

import Album from "../models/album.model.js";

const albumRouter = Router();


//2.1 Crie a rota POST /albums
albumRouter.post("/albums", async (req, res) => {
  try {
    //Essa rota irá receber requests contendo um objeto com as informações do album: performer, title, cost
    console.log(req.body);
    //Criar um novo album com os valores recebidos no req.body, utilizando o model Album.
    const createdAlbum = await Album.
      create({
       ...req.body 
      });

    return res.status(201).json(createdAlbum);

  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

//2.2 Crie a rota GET /albums
albumRouter.get("/albums", async (req, res) => {
  try {
    
    //Retornar todos os albums do banco de dados
    const albums = await Album.
      find({});

    //Retornar uma response em JSON contendo todos os documentos de albums
    return res.status(200).json(albums);

  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

//2.3 Crie a rota GET /albums/:albumId
albumRouter.get("/albums/:albumId", async (req, res) => {
  try {
    //A rota recebe a id do album pelo parâmetro de rota albumId
    const { albumId } = req.params;

    //Retornar um único documento pelo seu id, utilizando o model Album
    const album = await Album.
      findOne({ 
        _id: albumId 
      });

    //Deve retornar uma response em JSON incluindo o objeto do album.
    return res.status(200).json(album);

  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

//2.4 Crie a rota PUT /albums/:albumId
albumRouter.put("/albums/:albumId", async (req, res) => {
  try {
    console.log(req.body);

    //A rota recebe o id do album a ser atualizado como o parâmetro de rota albumId
    const { albumId } = req.params;

    //Encontrar um album existente pelo seu id e atualizar os campos performer, title e cost.
    const updatedAlbum = await Album.findByIdAndUpdate(
      albumId,
      { ...req.body },
      { new: true, runValidators: true  }
    );
    
    //Retornar uma response em JSON incluindo o documento atualizado do album.
    return res.status(200).json(updatedAlbum);

  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

//2.5 Crie a rota DELETE /albums/:albumId
albumRouter.delete("/albums/:albumId", async (req, res) => {
  try {
    //Essa rota recebe o id do album a ser deletado como o parâmetro de rota albumId.
    const { albumId } = req.params;

    //Deletar um album existente pelo seu id, utilizando o model Album.
    const deletedAlbum = await Album.findByIdAndRemove(albumId);
    
    //Retornar uma response em JSON incluindo apenas o status HTTP de 204.
    return res.status(204).json();

  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

export default albumRouter;
