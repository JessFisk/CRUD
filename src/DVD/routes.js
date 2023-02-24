const { Router } = require("express");
const DVDRouter = Router();

const { getallDVDs, addDVD, updateDVD, deleteDVD } = require("./controllers");

DVDRouter.get("/DVD/getallDVDs", getallDVDs);
DVDRouter.post("/DVD/addDVD", addDVD);
DVDRouter.put("/DVD/updateDVD", updateDVD);
DVDRouter.delete("/DVD/deleteDVD", deleteDVD);


module.exports = DVDRouter;
