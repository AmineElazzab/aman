import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const URL = 'http://192.168.1.104:5000';


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

export async function getProductsByCategory(categoryId) {
    const response = await axios.get(`${URL}/api/product/getProductsByCategory/${categoryId}`);
    return response.data;
}

export async function getCartItems() {
    const token = await AsyncStorage.getItem("token")
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDA3NjE1ZTcyNTVmNDAzNDNiOTA3NiIsImlhdCI6MTY4MDYxNzU2NywiZXhwIjoxNjgzMjA5NTY3fQ.OtQZdMHq7PJFjO0t-dVuB5wrARC19FnQ_vSLKrzKV-M"
    const response = await axios.get(`${URL}/api/cart/getCartItems`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    );

    return response.data;
}

export async function addToCart(productId) {
    const token = await AsyncStorage.getItem("token")
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDA3NjE1ZTcyNTVmNDAzNDNiOTA3NiIsImlhdCI6MTY4MDYxNzU2NywiZXhwIjoxNjgzMjA5NTY3fQ.OtQZdMHq7PJFjO0t-dVuB5wrARC19FnQ_vSLKrzKV-M"
    const response = await axios.post(`${URL}/api/cart/addToCart/${productId}`, {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}


export async function addAddress(userId) {
    const token = await AsyncStorage.getItem("token")

    const response = await axios.post(`${URL}/api/address/addAddress/${userId}`, {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;


    // const response = await axios.post(`${URL}/api/address/addAddress/${userId}`);
    // return response.data;
}

export async function GetProductById(productId) {
    const response = await axios.get(`${URL}/api/product/getProductById/${productId}`);
    return response.data;
}

export async function DeleteCartItem(
    cartItemId
) {
    const token = await AsyncStorage.getItem("token")
    const response = await axios.delete(`${URL}/api/cart/deleteCartItem/${cartItemId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}


export async function getOrderByUserId() {
    const token = await AsyncStorage.getItem("token")
    const response = await axios.get(`${URL}/api/order/getOrderByUserId`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export async function addOrder() {
    const token = await AsyncStorage.getItem("token")
    const response = await axios.post(`${URL}/api/order/addOrder`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}


//getUserById
export async function getUserById(userId) {
    const token = await AsyncStorage.getItem("token")
    const response = await axios.get(`${URL}/api/user/getUserById/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}