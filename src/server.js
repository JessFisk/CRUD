require("dotenv").config();
require("./db/connections");

const express = require("express");
const DVD = require("./DVD/model");

const DVDRouter = require("./DVD/routes");

const app = express();
app.use(express.json());
const port = 5001;


app.use(DVDRouter);
// app.use(actorRouter);
// app.use(userRouter);

/// Add/ Insert function//////////////////////////////////////////////////////
// app.post("/DVD/addDVD", async (request, response) => {
//     const newDVD = await DVD.create({
//         title: request.body.title,
//         actor: request.body.actor,
//         genre: request.body.genre,
//     });

//     const successResponse = {
//         message: `Successfully added ${request.body.title}`,
//         DVD: newDVD,
//     };

//     response.send(successResponse);
// });


///Get all function//////////////////////////////////////////////////////
// app.get("/DVD/getallDVDs", async (request, response) => {
//     const allDVDs = await DVD.find({});

//     const successResponse = {
//         message: "Successfully collected all DVDs",
//         DVDs: allDVDs,
//     };

//     response.json(successResponse);
// });


///Generic update function//////////////////////////////////////////////////////
// app.put("/DVD/updateDVDactor", async (request, response) => {
//     const filterObj = { title: request.body.title };
//     const updateObj = { [request.body.updateKey]: request.body.updateValue };
//     const updatedDVD = await DVD.updateOne(filterObj, updateObj);

//     const successResponse = {
//         message: `Successfully replaced ${request.body.updateKey} with ${request.body.updateValue}`,
//         updatedDVD: updatedDVD,
//     };

//     response.json(successResponse);
// });


///generic update  Json body example//////////////////////////////////////////////////////
    // {
    // "title": "The Persuite of Happiness",
    // "updateKey": "actor", 
    // "updateValue": "Will Smith"
    // }

    // {
    // "title": "The Persuite of Happiness",
     // "updateKey": "genre", 
     // "updateValue": "something else"
     // }


/////Delete Function/////////////////////////////////////////////////////
// app.delete("/DVD/deleteDVD", async (request, response) => {
//     const deletedDVD = await DVD.deleteOne({
//         title: request.body.title,
//     });

//     const successResponse = {
//         message: `Successfully deleted ${request.body.title}`,
//         deletedDVD: deletedDVD,
//     };

//     response.json(successResponse);
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});