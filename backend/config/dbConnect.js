import mongoose from "mongoose";
import Product from "../models/product";

const dbConnect = () => {

  if (mongoose.connection.readyState >= 1) {
    console.log("Value of ready state is more than 1", mongoose.connection.readyState);
    return;
  }


  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.DB_URI)
          .then(
            () => {
              console.log("Mongodb database connected")
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
