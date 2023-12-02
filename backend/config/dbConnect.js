import mongoose from "mongoose";
import Product from "../models/product";

const dbConnect = () => {

  if (mongoose.connection.readyState >= 1) {
    return;
  }


  mongoose.set("strictQuery", false);
  mongoose.connect("mongodb+srv://ecommerce:NePaL530351@cluster0.0mporsl.mongodb.net/buyitnow?retryWrites=true&w=majority")
          .then(
            () => {
              Product.find().then((item)=> {
                  console.log(item);
              })
            }
          )

          .catch((err)=> {
                console.log("Error occured = ", err)
          })
};

export default dbConnect;
