import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {getaProduct} from "@/backend/controllers/productControllers";

const handler = nc();

dbConnect();

handler.get(getaProduct);


export default handler;
