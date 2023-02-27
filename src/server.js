require("dotenv").config();
require("./db/connections");

const cors = require("cors");

const express = require("express");
const DVD = require("./DVD/model");

const DVDRouter = require("./DVD/routes");

const app = express();

app.use(cors());
app.use(express.json());
const port = 5001;


app.use(DVDRouter);

/////////////////// Add/Insert function////////////////////////////////////////////
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


//////////////////////Get all function//////////////////////////////////////////////////////
// app.get("/DVD/getallDVDs", async (request, response) => {
//     const allDVDs = await DVD.find({});

//     const successResponse = {
//         message: "Successfully collected all DVDs",
//         DVDs: allDVDs,
//     };

//     response.json(successResponse);
// });

//////////////////////////Update a specific Field (Actor)////////////////////////////////////////////////
// app.put("/DVD/updateDVDActor", async (request, response) => {
//     // console.log(request);

//         const updateDVD = await DVD.updateOne(
//         {"actor": "Joe Bloggs"},
//         {"actor": "Jane Doe"});
//         console.log (updateDVD)

//         response.send({message: "success!", updateDVD: updateDVD});

//     });


///////////////Generic/update any field function//////////////////////////////////////////////////////
// app.put("/DVD/updateDVD", async (request, response) => {
//     const filterObj = { title: request.body.title };
//     const updateObj = { [request.body.updateKey]: request.body.updateValue };
//     const updatedDVD = await DVD.updateOne(filterObj, updateObj);

//     const successResponse = {
//         message: `Successfully replaced ${request.body.updateKey} with ${request.body.updateValue}`,
//         updatedDVD: updatedDVD,
//     };

//     response.json(successResponse);
// });


/////////////generic update  Json body example///////////////////////////////////////////////////
// {
// "title": "The Persuite of Happiness",
// "updateKey": "actor", 
// "updateValue": "Will Smith"
// }

// {
// "title": "The Persuite of Happiness",
//  "updateKey": "genre", 
//  "updateValue": "something else"
//  }


////////////////Delete Function/////////////////////////////////////////////////////
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

/////////////////////////////Delete Many///////////////////////////////////////////
// app.post("/DVD/deleteManyDVD", async (request, response) => {
//     const deleteManyDVD = await DVD.deleteMany({});

//     const successResponse = {
//         message: "Successfully Deleted",
//         deleteManyDVD: deleteManyDVD
//     };

//     response.send(successResponse);
// });

//////////////////////////////////////////////////////

// app.get("/DVD/search/:movietitle", async (request, response) => {
//     const findaDVD = await DVD.find({title: request.params.movieTitle})

//     const successResponse = {
//         message: "DVD successfully found",
//         findDVD: findaDVD
//         }

//     response.json(successResponse);
// });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});