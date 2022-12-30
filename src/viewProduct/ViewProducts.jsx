import React from 'react';

const ViewProducts = () => {
    const data = [
        {
            productName: "Sample",
            productImage: "sampleImage",
            productPrice: "productPrice",
            productDescription: "productDescription"
        },
        {
            productName: "Sample",
            productImage: "sampleImage",
            productPrice: "productPrice",
            productDescription: "productDescription"
        },
        {
            productName: "Sample",
            productImage: "sampleImage",
            productPrice: "productPrice",
            productDescription: "productDescription"
        },
        {
            productName: "Sample",
            productImage: "sampleImage",
            productPrice: "productPrice",
            productDescription: "productDescription"
        },
        {
            productName: "Sample",
            productImage: "sampleImage",
            productPrice: "productPrice",
            productDescription: "productDescription"
        },
        {
            productName: "Sample",
            productImage: "sampleImage",
            productPrice: "productPrice",
            productDescription: "productDescription"
        },
        {
            productName: "Sample",
            productImage: "sampleImage",
            productPrice: "productPrice",
            productDescription: "productDescription"
        },
        {
            productName: "Sample",
            productImage: "sampleImage",
            productPrice: "productPrice",
            productDescription: "productDescription"
        },
        {
            productName: "Sample",
            productImage: "sampleImage",
            productPrice: "productPrice",
            productDescription: "productDescription"
        },
    ]
    return (
        <>
            <div>
                <div className='flex justify-center my-2'><button className='flex p-1 px-2 my-2 text-white bg-blue-500 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '>+ Add Product</button></div>
            </div>
            <div className='flex justify-center my-5'>
                <table className='table-auto border-collapes border border-slate-500'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600'>Sr Number</th>
                            <th className='border border-slate-600'>Product Image</th>
                            <th className='border border-slate-600'>Product Name</th>
                            <th className='border border-slate-600'>Price</th>
                            <th className='border border-slate-600'>Producr Description</th>
                            <th className='border border-slate-600'>Edit</th>
                            <th className='border border-slate-600'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((value, index) => (<tr>
                            <td className='border border-slate-600'>{index + 1}</td>
                            <td className='border border-slate-600'>{value.productImage}</td>
                            <td className='border border-slate-600'>{value.productName}</td>
                            <td className='border border-slate-600'>{value.productPrice}</td>
                            <td className='border border-slate-600'>{value.productDescription}</td>
                            <td className='border border-slate-600'><button className='flex p-1 px-2 text-white m-1 bg-blue-500 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '>Edit</button></td>
                            <td className='border border-slate-600'><button className='flex p-1 px-2 text-white m-1 bg-blue-500 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '>Delete</button></td>
                        </tr>))}
                    </tbody>

                </table>
            </div>

        </>
    )
}

export default ViewProducts