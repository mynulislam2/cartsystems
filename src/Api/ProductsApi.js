import axios from "axios";

export const ProductsApi = {
    getProduct: async () => {
        return axios.get(`https://fakestoreapi.com/products/?limit=10`)
    },
    getCategory: async () => {
        return axios.get(`https://fakestoreapi.com/products/categories`)
    },
    SelectedCategory: async (category) => {
        return axios.get(`https://fakestoreapi.com/products/category/${category}`)
    }
}