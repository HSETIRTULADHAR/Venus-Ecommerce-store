import mongoose from "mongoose";
import Product from "../models/product";

const dbConnect = () => {

  if (mongoose.connection.readyState >= 1) {
    return;
  }


  mongoose.set("strictQuery", false);
  mongoose.connect(DB_URI)
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
