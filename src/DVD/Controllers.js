const DVD = require("./model");


///////////////////////////////////////////////////////////
const addDVD = async (request, response) => {
    const newDVD = await DVD.create({
        title: request.body.title,
        actor: request.body.actor,
        genre: request.body.genre,
    });

    const successResponse = {
        message: `Successfully added ${request.body.title}`,
        DVD: newDVD,
    };

    response.send(successResponse);
};

///////////////////////////////////////////////////////////
const getallDVDs = async (request, response) => {
    const allDVDs = await DVD.find({});

    const successResponse = {
        message: "Successfully collected all DVDs",
        DVDs: allDVDs,
    };

    response.json(successResponse);
};

///////////////////////////////////////////////////////////

const updateDVDActor = async (request, response) => {
    const updateDVD = await DVD.updateOne(
        { "actor": "Will Smith" },
        { "actor": "Someone Else" });

    response.json({ message: "Successfully Updated!", updateDVD: updateDVD });
};

///////////////////////////////////////////////////////////

const updateDVD = async (request, response) => {
    const filterObj = { title: request.body.title };
    const updateObj = { [request.body.updateKey]: request.body.updateValue };
    const updatedDVD = await DVD.updateOne(filterObj, updateObj);

    const successResponse = {
        message: `Successfully replaced ${request.body.updateKey} with ${request.body.updateValue}`,
        updatedDVD: updatedDVD,
    };

    response.json(successResponse);
};

///////////////////////////////////////////////////////////
const deleteDVD = async (request, response) => {
    const deletedDVD = await DVD.deleteOne({
        title: request.body.title,
    });

    const successResponse = {
        message: `Successfully deleted ${request.body.title}`,
        deletedDVD: deletedDVD,
    };

    response.json(successResponse);
};

///////////////////////////////////////////////////////////

const deleteManyDVD = async (request, response) => {
    const deleteManyDVD = await DVD.deleteMany({});

    const successResponse = {
        message: "Successfully Deleted",
        deleteManyDVD: deleteManyDVD
    };

    response.send(successResponse);
};
///////////////////////////////////////////////////////////

const findDVD = async (request, response) => {
    const findaDVD = await DVD.find({ title: request.params.movieTitle })

    const successResponse = {
        message: "DVD successfully found",
        findDVD: findaDVD
    }

    response.json(successResponse);
};


module.exports = {
    getallDVDs,
    addDVD,
    updateDVDActor,
    updateDVD,
    deleteDVD,
    deleteManyDVD,
    findDVD,
};