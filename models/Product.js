const mongoose = require("mongoose");

// schema design
const ProductSchema = mongoose.Schema(
    {
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
        }
    },
    {
        timestamps: true,
    }
);

// Model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;