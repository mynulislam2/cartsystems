import axios from "axios";

export const ProductsApi = {
    getProduct: async () => {
        return fetch('Products.json')
    },
    getCategory: async () => {
        return axios.get(`https://fakestoreapi.com/products/categories`)
    },
    SelectedCategory: async (category) => {
        return axios.get(`https://fakestoreapi.com/products/category/${category}`)
    }
}