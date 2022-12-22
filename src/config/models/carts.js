import mongoose, { mongo } from "mongoose";

const cartsCollection = "carts";

const cartsSchema = new mongoose.Schema(
    {
        timestamp:String,
        products:Array
    }
);
const CartsModel = mongoose.model(cartsCollection, cartsSchema);

export {CartsModel};