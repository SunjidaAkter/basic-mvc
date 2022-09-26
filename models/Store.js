const mongoose = require("mongoose");


const storeSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please provide a store name"],
        maxLength: 100,
        lowercase: true,
        enum: {
            values: ["dhaka", "chattogram", "sylhet", "barisal"],
            message: "{VALUE} is not a valid name"
        }
    },
    description: String,
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    },
    manager: {
        name: String,
        contactNumber: String,
        id: {
            type: ObjectId,
            ref: "User"
        }
    }
}, {
    timestamps: true
});

const Store = mongoose.model("Store", storeSchema);

exports = Store;