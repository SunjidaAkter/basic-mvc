const mongoose = require("mongoose");

// schema design
const toursSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Provide a package name for this tour"],
            trim: true,
            unique: [true, "packageName must be unique"],
            minLength: [3, "packageName must be at least 3 characters"],
            maxLength: [100, "packageName is to large"],
        },

        detailing: {
            type: String,
            required: [true, "Provide detailing for this package"],
            trim: true,
        },

        img: {
            type: String,
            required: [true, "Provide an image url for this package"],
            trim: true,
        },

        price: {
            type: Number,
            required: [true, "Provide price for this package"],
            min: [0, "price can't be negative"],
        },

        visitors: {
            type: Number,
            required: true,
            min: [0, "visitors can't be negative"],
            validate: {
                validator: (value) => {
                    const isInteger = Number.isInteger(value);
                    if (isInteger) {
                        return true;
                    } else {
                        return false;
                    }
                },
            },
            message: "visitors must be an integer",
        },

        status: {
            type: String,
            required: true,
            enum: {
                values: ["available-for-booking", "already-booked"],
                message: "status value can't be {VALUE}, must be available-for-booking/already-booked",
            },
        },

        views: {
            type: Number,
            default: 0,
            required: true,
            min: [0, "views can't be negative"],
        },
    },
    {
        timestamps: true,
    }
);

// Model
const tours = mongoose.model("tours", toursSchema);

module.exports = tours;