import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import m from '../../assets/aman.png'



function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [isPending, setIsPending] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("file", file);

    fetch("http://localhost:5000/api/product/addProduct", {
      method: "POST",
      body: formData,
    })
      .then(() =>{
        toast.success("Product Added Successfully");
      })
      .catch((err) => {
        toast.error("Something went wrong");
        setIsPending(false);
      });
  };

  //get category
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/category/getCategories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      });
  }, []);



  
  return (
    <div>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            <a href="#" title="home">
              <img src={m} className="w-32" alt="tailus logo" style={{ width: 200, height: 200, resizeMode: 'contain', marginBottom: 20 }} />
            </a>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            <li>
              <a href="/" aria-label="dashboard" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600" />
                  <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300" />
                  <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300" />
                </svg>
                <span className="-mr-1 font-medium">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path className="fill-current text-gray-600 group-hover:text-cyan-600" d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10" />
                </svg>
                <span className="group-hover:text-gray-700">Add Product</span>
              </a>
            </li>

          </ul>
        </div>
       
      </aside>
      <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Add Product</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Replace with your content */}
            <div className="py-4">
              </div>
            </div>
            {/* /End replace */}
          </div>

      </main>

    <div className="container mx-auto my-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Add a Product
            </div>
            <form onSubmit={handleSubmit} className="mt-6" encType="multipart/form-data" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                 Name:
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    required
                    className="shadow-sm focus:ring focus:border-blue-300 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price:
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    autoComplete="off"
                    required
                    className="shadow-sm focus:ring focus:border-blue-300 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description:
                </label>
                <div className="mt-1">
                  <textarea 
                    type="text"
                    name="description"
                    id="description"
                    autoComplete="off"
                    required
                    className="shadow-sm focus:ring focus:border-blue-300 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category:
                </label>
                <div className="mt-1">
                  <select
                    name="category"
                    id="category"
                    autoComplete="off"
                    required
                    className="shadow-sm focus:ring focus:border-blue-300 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Select Category</option>
                    {loading ? (
                      <option value="">Loading...</option>
                    ) : (
                      categories.map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      ))
                    )}
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                   image:
                </label>
                <div className="mt-1">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    required
                    className="shadow-sm focus:ring focus:border-blue-300 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
              </div>
              {!isPending && <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Product</button>}
              {isPending && <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled>Adding Product...</button>}
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AddProduct