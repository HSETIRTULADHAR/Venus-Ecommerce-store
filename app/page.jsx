import axios from "axios";
import React from "react";
import ListProducts from '@/components/products/ListProducts'
import queryString from "query-string";

const getData = async ({searchParams}) => {
  const urlParams = {
    keyword: searchParams.keyword,
    page: searchParams.page,
    category: searchParams.category,
    "ratings[gte]": searchParams.ratings,
    "price[gte]": searchParams.min,
    "price[lte]": searchParams.max,
  }
  const searchQuery = queryString.stringify(urlParams);

  console.log("Search query",searchQuery);

  const {data} = await axios.get(`${process.env.API_URL}/api/products?${searchQuery}`);
  return data;
}


const HomePage =  async ({searchParams}) => {
  const ProdData = await getData({searchParams})
  return <ListProducts data={ProdData} />
};

export default HomePage;
