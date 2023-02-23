const { Router } = require("express");
const DVDRouter = Router();

const { getallDVDs, addDVD, updateDVDactor, deleteDVD } = require("./controllers");

DVDRouter.get("/DVD/getallDVDs", getallDVDs);
DVDRouter.post("/DVD/addDVD", addDVD);
DVDRouter.put("/DVD/updateDVDactor", updateDVDactor);
DVDRouter.delete("/DVD/deleteDVD", deleteDVD);


module.exports = DVDRouter;
