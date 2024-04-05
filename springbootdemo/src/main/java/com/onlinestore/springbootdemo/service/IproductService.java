package com.onlinestore.springbootdemo.service;

import com.onlinestore.springbootdemo.model.Product;

import java.util.List;

public interface IproductService {
    Product addProduct(Product product);
    List<Product> getProducts();
    Product updateProduct(Product product, Long id);
    Product getProductById(Long id);
    void deleteProduct(Long id);
}
