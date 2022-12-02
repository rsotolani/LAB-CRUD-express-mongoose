import express from "express";
import * as dotenv from "dotenv";
import connect from "./config/db.config.js";
import albumRoutes from "./routes/album.router.js";
import purchaseRoutes from "./routes/purchase.router.js";
const app = express();

dotenv.config();
connect();
app.use(express.json());

// SUAS ROTAS AQUI!!! v v v não esqueça de importá-las!
app.use("/album", albumRoutes);
app.use("/purchase", purchaseRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server up and running on port: ${process.env.PORT}!`);
});
