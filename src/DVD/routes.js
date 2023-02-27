const { Router } = require("express");
const DVDRouter = Router();

const {
    getallDVDs,
    addDVD,
    updateDVDActor,
    updateDVD,
    deleteDVD,
    deleteManyDVD,
    findDVD
} = require("./controllers");

DVDRouter.get("/DVD/getallDVDs", getallDVDs);
DVDRouter.post("/DVD/addDVD", addDVD);
DVDRouter.put("/DVD/updateDVD", updateDVD);
DVDRouter.delete("/DVD/deleteDVD", deleteDVD);
DVDRouter.put("/DVD/updateDVDActor", updateDVDActor);
DVDRouter.delete("/DVD/deleteManyDVD", deleteManyDVD);
DVDRouter.get("/DVD/search/:movieTitle", findDVD)

module.exports = DVDRouter;
