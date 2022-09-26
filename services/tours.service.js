// const Tours = require("../models/Stock");

// exports.getAllToursService = async (queries) => {
//     const tours = await Tours
//         .find({})
//         .skip(queries.skip)
//         .limit(queries.limit)
//         .select(queries.fields)
//         .sort(queries.sortBy)
//     return tours;
// }
// exports.createTourService = async (data) => {
//     const tours = await Tours.create(data)
//     return tours;
// }
// exports.updateOneTourByIdService = async (id, data) => {
//     const tours = await Tours.updateOne(
//         { _id: id },
//         { $set: data },
//         {
//             runValidators: true,
//         }
//     );
//     return tours;
// }
// exports.getOneTourByIdService = async (id) => {
//     const incViewCount = await Tours.updateOne(
//         { _id: id },
//         { $inc: { views: 1 } }
//     );
//     const tours = await Tours.findById(id);
//     return [tours, incViewCount];
// }
// exports.getCheapestTourService = async () => {
//     const tours = await Tours.find({}).sort("price").limit(3);
//     return tours;
// }
// exports.getTrendingTourService = async () => {
//     const tours = await Tours.find({}).sort("-views").limit(3);
//     return tours;
// }