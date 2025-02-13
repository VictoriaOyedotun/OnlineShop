import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ProductDetails = () => {
    const{id} = useParams();
    const[product, setProduct] = useState({
        name : '',
        description : '',
        price : '',
        category : ''
       });
    useEffect(() =>{
    loadProducts();
    }, [])
    const loadProducts = async()=>{
    const result = await axios.get(
        `http://localhost:8080/products/product/${id}`);
            setProduct(result.data);
    };
  return (
    
    <section className='shadow' style={{backgroundColor: "whitesmoke"}}>
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-3'>
                    <div className='card mb-4'>
                        <div className='card-body text-center'>
                            <img src={require('./cake2.jpg')} alt='avatar' className='rounded-circle img-fluid' style={{width: 150}} />
                            <h5 className='my-3'>
                                {`${product.name}`}
                            </h5>
                            {/* <div className='d-flex justify-content-center mb-2'>
                                <button type='button' className='btn btn-outline-primary'></button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='col-lg-9'>
                    <div className='card mb-4'>
                        <div className='card-body'>
                           
                            <div className='row'>
                                <div className='col-sm-3'>
                                    <h5 className='mb-0'>Name</h5>
                                </div>
                                <div className='col-sm-9'>
                                    <p className='text-muted mb-0'>
                                        {product.name}
                                    </p>
                                </div>
                            </div>
                            <hr/>
                            <div className='row'>
                                <div className='col-sm-3'>
                                    <h5 className='mb-0'>Description</h5>
                                </div>
                                <div className='col-sm-9'>
                                    <p className='text-muted mb-0'>
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                            <hr/>
                            <div className='row'>
                                <div className='col-sm-3'>
                                    <h5 className='mb-0'>Price</h5>
                                </div>
                                <div className='col-sm-9'>
                                    <p className='text-muted mb-0'>
                                        {product.price}
                                    </p>
                                </div>
                            </div>
                            <hr/>
                            <div className='row'>
                                <div className='col-sm-3'>
                                    <h5 className='mb-0'>Category</h5>
                                </div>
                                <div className='col-sm-9'>
                                    <p className='text-muted mb-0'>
                                        {product.category}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDetails
