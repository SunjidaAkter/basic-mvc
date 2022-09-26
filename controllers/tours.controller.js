const toursService = require("../services/tours.service");
const { isValidObjectId } = require("mongoose");


//get all tours
exports.getAllTours = async (req, res, next) => {
    try {
        const queries = {};
        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            queries.sortBy = sortBy;
        }
        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ");
            queries.fields = fields;
        }
        if (req.query.page) {
            const { page = 0, limit = 3 } = req.query;
            const skip = (page - 1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = parseInt(limit);
        }
        const result = await toursService.getAllToursService(queries);
        if (!result) {
            return res.status(400).json({
                success: false,
                message: "something is wrong"
            });
        }
        res.status(200).json({
            success: true,
            message: "successfull",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "can't get the data",
            error: error.message
        })
    }
}


//create a new tour
exports.createTour = async (req, res, next) => {
    try {
        const result = await toursService.createTourService(req.body);
        if (!result) {
            return res.status(400).json({
                success: false,
                message: "something is wrong"
            });
        }
        res.status(200).json({
            success: true,
            message: "successfull",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "can't post the data",
            error: error.message
        });
    }
}


//update one tour by id
exports.updateOneTourById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await toursService.updateOneTourByIdService(id, req.body);
        if (!result || !isValidObjectId(id)) {
            return res.status(400).json({
                success: false,
                message: "something is wrong"
            });
        }
        res.status(200).json({
            success: true,
            message: "successfull",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "can't update the data",
            error: error.message
        });
    }
}


//get a tour by id
exports.getOneTourById = async (req, res, next) => {
    try {
        const { id } = req.params;
        // const { views } = req.body;
        const [result, incViewCount] = await toursService.getOneTourByIdService(id);
        if (!result || !isValidObjectId(id) || !incViewCount.acknowledged) {
            return res.status(400).json({
                success: false,
                message: "something is wrong"
            });
        }
        res.status(200).json({
            success: true,
            message: "successfull",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "can't get the data",
            error: error.message
        });
    }
}


exports.getCheapestTour = async (req, res, next) => {
    try {
        const result = await toursService.getCheapestTourService();

        if (!result || result.length == 0) {
            return res.status(400).json({
                success: false,
                message: "no data found"
            });
        }
        res.status(200).json({
            success: true,
            message: "successfull",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "can't get the data",
            error: error.message
        })
    }
}
exports.getTrendingTour = async (req, res, next) => {
    try {
        const result = await toursService.getTrendingTourService();

        if (!result || result.length == 0) {
            return res.status(400).json({
                success: false,
                message: "no data found"
            });
        }
        res.status(200).json({
            success: true,
            message: "successfull",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "can't get the data",
            error: error.message
        })
    }
}