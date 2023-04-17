import React from "react";
import { useEffect, useState } from "react";
import m from "../../assets/aman.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/product/getProducts")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  //delete product
  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/api/product/deleteProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Product Deleted Successfully");
        const remaining = product.filter((spot) => spot._id !== id);
        setProduct(remaining);
      });
  };
  //category
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/category/getCategories")
      .then((response) => response.json())
      .then((datta) => {
        setCategory(datta);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  //orders
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/order/getOrders")
      .then((response) => response.json())
      .then((dattta) => {
        setOrder(dattta);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            <a href="#" title="home">
              <img
                src={m}
                className="w-32"
                alt="tailus logo"
                style={{
                  width: 200,
                  height: 200,
                  resizeMode: "contain",
                  marginBottom: 20,
                }}
              />
            </a>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            <li>
              <a
                href="#"
                aria-label="dashboard"
                className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
              >
                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                    className="fill-current text-cyan-400 dark:fill-slate-600"
                  />
                  <path
                    d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                    className="fill-current text-cyan-200 group-hover:text-cyan-300"
                  />
                  <path
                    d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                    className="fill-current group-hover:text-sky-300"
                  />
                </svg>
                <span className="-mr-1 font-medium">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/add-product"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600"
                    d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"
                  />
                </svg>
                <span className="group-hover:text-gray-700">Add Product</span>
              </a>
            </li>
      
          </ul>
        </div>
       
      </aside>
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
              Dashboard
            </h5>
            <button className="w-12 h-16 -mr-2 border-r lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <h1>
          <div className="px-6 py-4 2xl:container">
            <h1 className="text-2xl font-medium text-gray-600">Products</h1>
            <div>
              <table class="min-w-full table-auto">
                <thead>
                  <tr class="bg-gray-200 uppercase text-xs font-bold text-gray-600">
                    {/* <th class="py-3 px-4 border-b border-gray-300">ID</th> */}
                    <th class="py-3 px-4 border-b border-gray-300">Name</th>
                    <th class="py-3 px-4 border-b border-gray-300">
                      Description
                    </th>
                    <th class="py-3 px-4 border-b border-gray-300">Price</th>
                    <th class="py-3 px-4 border-b border-gray-300">Category</th>
                    <th class="py-3 px-4 border-b border-gray-300">
                      Supprimer
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.map((product, index) => (
                    <tr key={index} class="hover:bg-gray-100">
                      {/* <td class="py-3 px-4 border-b border-gray-300">{product._id}</td> */}
                      <td class="py-3 px-4 border-b border-gray-300">
                        {product.name}
                      </td>
                      <td class="py-3 px-4 border-b border-gray-300">
                        {product.description}
                      </td>
                      <td class="py-3 px-4 border-b border-gray-300">
                        {product.price}
                      </td>
                      <td class="py-3 px-4 border-b border-gray-300">
                        {product.category?.name}
                      </td>
                     
                      <td class="py-3 px-4 border-b border-gray-300">
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => deleteProduct(product._id)}
                        >
                          <FontAwesomeIcon icon={faTrash} className="mr-2" />
                          
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </h1>
        <h1>
          <div className="px-6 py-4 2xl:container">
            <h1 className="text-2xl font-medium text-gray-600">Orders</h1>
            <div>
              <table class="min-w-full table-auto">
                <thead>
                  <tr class="bg-gray-200 uppercase text-xs font-bold text-gray-600">
                    {/* <th class="py-3 px-4 border-b border-gray-300">ID</th> */}
                    <th class="py-3 px-4 border-b border-gray-300">Name</th>
                    <th class="py-3 px-4 border-b border-gray-300">Email</th>
                    <th class="py-3 px-4 border-b border-gray-300">Address</th>
                    <th class="py-3 px-4 border-b border-gray-300">City</th>
                    <th class="py-3 px-4 border-b border-gray-300">Product</th>
                    {/* <th class="py-3 px-4 border-b border-gray-300">Category</th> */}
                  </tr>
                </thead>
                <tbody>
                  {order.map((order, index) => (
                    <tr key={index} class="hover:bg-gray-100">
                      {/* <td class="py-3 px-4 border-b border-gray-300">{product._id}</td> */}
                      <td class="py-3 px-4 border-b border-gray-300">
                        {order.user?.fullName}
                      </td>
                      <td class="py-3 px-4 border-b border-gray-300">
                        {order.user?.email}
                      </td>
                      <td class="py-3 px-4 border-b border-gray-300">
                        {order.user?.address}
                      </td>
                      <td class="py-3 px-4 border-b border-gray-300">
                        {order.user?.city}
                      </td>
                      <td class="py-3 px-4 border-b border-gray-300">
                        {order.product?.name}
                      </td>
                     
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
}
