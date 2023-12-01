import Product from "../models/product";
import APIFilters from "../utils/APIFilters";
export const newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    product,
  });
};

export const getProduct = async (req, res, next) => {
  const resPerPage = 2
  const productCount = await Product.countDocuments();
  const apiFilters = new APIFilters(Product.find(), req.query)
      .search()
      .filter();

  let product = await apiFilters.query;
  const filteredProductsCount = product.length;
  apiFilters.pagination(resPerPage);

  product = await apiFilters.query.clone();
  res.status(200).json({
    productCount,
    resPerPage,
    filteredProductsCount,
    product,
  });
};


export const getaProduct = async (req, res, next) => {
  const product = await Product.findById(req.query.id);
  if (!product){
    res.status(404).json({
      error: "No product found",
    })
  }
  res.status(200).json({
    product,
  });
};
