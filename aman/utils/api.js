import axios from 'axios';


const URL = 'http://192.168.9.20:5000';


export async function Login({
    email,
    password
}) {
    const response = await axios.post(`${URL}/api/auth/login`, {
        email,
        password
    });
    return response.data;
}

export async function Register({
    fullName,
    email,
    password,
    address,
    city
}) {
    const response = await axios.post(`${URL}/api/auth/register`, {
        fullName,
        email,
        password,
        address,
        city
    });
    return response.data;
}



export async function getCategories() {
    const response = await axios.get(`${URL}/api/category/getCategories`);
    return response.data;
}

export async function getProducts() {
    const response = await axios.get(`${URL}/api/product/getProducts`);
    return response.data;
}
