import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {FaTrashAlt} from 'react-icons/fa';
import {FaEdit} from 'react-icons/fa';
import {FaEye} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Search from '../common/Search';

const ProductsView = () => {
  const[products, setProducts] = useState([]);
  const[search, setSearch] = useState("");
  useEffect(() =>{
    loadProducts();
  }, [])
  const loadProducts = async()=>{
    const result = await axios.get(
        "http://localhost:8080/products", {
            validateStatus: () =>{
                return true;
            }
        });
        if(result.status === 302){
            setProducts(result.data);
        }
  };
  const handleDelete = async(id)=>{
    await axios.delete(
        `http://localhost:8080/products/delete/${id}`
    );
    loadProducts();
  }
  return (
    <section>
        <Search search={search} setSearch={setSearch}/>
      <table className='table table-bordered table-hover shadow'>
        <thead>
            <tr className='text-center'>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
                <th colSpan="3">Actions</th>
            </tr>
        </thead>
        <tbody className='text-center'>
            {products
            .filter((pt)=>pt.name.toLowerCase().includes(search))
            .map((product, index)=> (

                <tr key={product.id}>
                    <th scope="row" key={index}>
                        {index+1}
                    </th>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td className='mx-2'>
                        <Link to={`/product-details/${product.id}`} className='btn btn-info'><FaEye/></Link>
                    </td>
                    <td className='mx-2'>
                        <Link to={`/edit-product/${product.id}`} className='btn btn-warning'><FaEdit/></Link>
                    </td>
                    <td className='mx-2'>
                        <button className='btn btn-danger' onClick={(e)=> handleDelete(product.id)}><FaTrashAlt/></button>
                    </td>
                </tr>
            ))}    
        </tbody>
      </table>
    </section>
  )
}

export default ProductsView
