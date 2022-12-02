import { Router } from "express";

import AlbumModel from "../models/album.model.js";

const router = Router();

router.post("/albums", async (req, res) => {
  try {
    console.log(req.body);
    const createdAlbum = await AlbumModel.create({ ...req.body });

    return res.status(201).json(createdAlbum);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.get("/albums", async (req, res) => {
  try {
    const albums = await AlbumModel.find();

    return res.status(200).json(albums);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.get("/albums/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const album = await AlbumModel.findOne({ _id: albumId });

    return res.status(200).json(album);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.put("/albums/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const updatedAlbum = await AlbumModel.findByIdAndUpdate(
      albumId,
      { ...req.body },
      { new: true }
    );

    return res.status(200).json(updatedAlbum);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.delete("/albums/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const deletedAlbum = await AlbumModel.findByIdAndRemove(albumId);

    return res.status(204).json(deletedAlbum);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

export default router;
