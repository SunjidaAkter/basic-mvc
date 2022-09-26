const mongoose = require("mongoose");
const { objectId } = mongoose.Schema.Types;

// schema design
const stockSchema = mongoose.Schema(

    {
        productId: {
            type: ObjectId,
            required: true,
            ref: "Product"
        },

        name: {
            type: String,
            required: [true, "Provide a  name for this product"],
            trim: true,
            unique: [true, "Name must be unique"],
            minLength: [3, "Name must be at least 3 characters"],
            maxLength: [100, "Name is to large"],
            lowercase: true
        },

        description: {
            type: String,
            required: [true, "Provide detailing for this"],
            trim: true,
        },


        unit: {
            type: String,
            required: true,
            enum: {
                values: ["kg", "litre", "pcs", "bags"],
                message: "unit value cant be {VALUE},must be kg/litre/pcs/bags"
            }
        },

        imageURLs: [{
            type: String,
            required: true,
            validate: {
                validator: (value) => {
                    if (!Array.isArray(value)) {
                        return false;
                    }
                    let isValid = true;
                    value.forEach(url => {
                        if (!validator.isURL(url)) {
                            isValid = false;
                        }
                    });
                    return isValid;
                },
                message: "Please provide valid url"
            }
        }],

        category: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
            min: [0, "product price can't be negative"]
        },

        quantity: {
            type: Number,
            required: true,
            min: [0, "product quantity can't be negative"]
        },

        brand: {
            name: {
                type: String,
                required: true
            },
            id: {
                type: ObjectId,
                ref: "Brand",
                required: true
            }
        },
        status: {
            type: String,
            required: true,
            enum: {
                values: ["in-stock", "out-of-stock", "discontinued"],
                message: "status can't be {VALUE}"
            },
        },
        store: {
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
            id: {
                type: ObjectId,
                required: true,
                ref: "Store"
            }
        },


        SuppliedBy: {
            name: {
                type: String,
                trim: true,
                required: [true, "Please provide a supplier name"],
            },
            id: {
                type: ObjectId,
                ref: "Supplier"
            }
        }
    },
    {
        timestamps: true,
    }
);

// Model
const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;